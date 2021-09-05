import { Task } from '../models/task';



new Task('SampleTask', () => console.log('SampleTask executed.'), { exec: true, interval: 10000 });
