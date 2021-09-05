import { ms } from '../services/ms.service';
import moment from 'moment';


export class Task {
  static all: Task[] = [];
  static allRecurring: Task[] = [];
  static allOneTime: Task[] = [];

  fn: Function;
  exec: boolean;
  type?: 'OneTime' | 'Recurring';
  interval?: number;
  delay?: number;
  timerHandler?: any;
  name: string;
  t_register: Date = new Date();
  tLastExec?: Date;
  nExec: number = 0;
  constructor(taskName: string, taskFn: Function, config: any) {
    this.name = taskName;
    this.fn = taskFn;
    if (!config || !config.exec) {
      this.exec = false;
      return;
    }
    this.exec = true;
    this.interval = ms(config.interval);
    this.delay = ms(config.delay) || 1000;
    this.type = (!this.interval || this.interval <= 0) ? 'OneTime' : 'Recurring';


    Task.all.push(this);
    if (this.type == 'OneTime') Task.allOneTime.push(this);
    if (this.type == 'Recurring') Task.allRecurring.push(this);


    this.schedule();
    console.log(this.info());
  }

  info() {
    const info = {
      name: this.name,
      type: this.type,
      nExec: this.nExec,
      lastExec: moment(this.tLastExec).fromNow(),
      registered: moment(this.t_register).fromNow(),
    };
    return JSON.stringify(info);
  }
  schedule() {
    if (this.type == 'OneTime') return this.scheduleOneTime();
    if (this.type == 'Recurring') return this.scheduleRecurring();
  }
  scheduleRecurring() {
    setTimeout(() => {
      this.runOnce();
      this.timerHandler = setInterval(() => {
        this.runOnce();
      }, this.interval);
    }, this.delay);
  }

  runOnce() {
    this.tLastExec = new Date();
    this.nExec += 1;
    this.fn();
  }

  scheduleOneTime() {
    this.timerHandler = setTimeout(() => {
      this.runOnce();
    }, this.delay);
  }
}
