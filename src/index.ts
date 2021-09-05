import { configs } from './settings';
import { app } from './app';
import { initMongoose } from './mongoose';

function getAddress(s: any) {
  const a = s.address();
  if (typeof a == 'string') return a;
  if (!a) return null;
  return `[${a.family}] ${a.address}:${a.port}`;
}

async function main() {
  try {
    await initMongoose();
    const server = app.listen(configs.app.port, (): void => {
      const addr = getAddress(server);
      console.log(`Connected successfully on ${addr}`);
    });
  }
  catch (error) {
    if (error instanceof Error) {
      console.error(`Error occured: ${error.message}`);
    }
  }

  if (configs.tasks && configs.tasks._runTasks) {
    import('./tasks').then(() => console.log('Starting tasks'));
  }
}
main();
