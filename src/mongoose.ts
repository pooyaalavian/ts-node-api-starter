import { connect, ConnectOptions } from 'mongoose';
import { configs } from './settings';

interface ConnectOptionsExtended extends ConnectOptions {
  useNewUrlParser: true
  useUnifiedTopology: true
}

export async function initMongoose(): Promise<void> {
  const { protocol, host, port, username, password, database, authDatabase } = configs.app.mongodb;
  if (!host || host === '') {
    return;
  }
  let uri: string;
  if (username && password) {
    uri = `${protocol}://${username}:${password}@${host}:${port}/${database}?authSource=${authDatabase}`;
  }
  else {
    uri = `${protocol}://${host}:${port}/${database}?authSource=${authDatabase}`;
  }
  const mongooseConnectOptions: ConnectOptionsExtended = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
  await connect(uri, mongooseConnectOptions);
  console.log('Mongodb connected');
}


