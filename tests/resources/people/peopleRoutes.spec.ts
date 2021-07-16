import request from 'supertest';
import { app } from '../../../src/server';

describe('Lists controller routes', () => {
    it('mounts addPerson endpoint', async () => {
        const res = await request(app).post('/people').send({ firstName: 'Test', lastName: 'User' });

        expect(res.status).toEqual(201);
    });
});
