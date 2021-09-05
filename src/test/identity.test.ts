import request, { } from 'supertest';
import { connection } from 'mongoose';
import { app } from '../app';
import { initMongoose } from '../mongoose';

describe('identity.controller', () => {
  beforeAll(async () => {
    await initMongoose();
  });

  it('Register a new user', async () => {
    const res = await request(app).post('/api/identity/register')
      .set('Content-Type', 'application/json')
      .send({});

    expect(res.statusCode).toEqual(200);
    expect(res.body.email).toEqual('');
  });

  afterAll(async () => {
    await connection.close();
  });
});
