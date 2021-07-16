import request from 'supertest';
import { app } from '../src/server';

describe('Main routes', () => {
    it('mounts api-docs endpoint', async () => {
        const res = await request(app).get('/api-docs/');
        const resJson = await request(app).get('/api-docs.json/');

        expect(res.status).toEqual(200);
        expect(resJson.status).toEqual(200);
    });
});
