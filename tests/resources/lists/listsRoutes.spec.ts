import request from 'supertest';
import { app } from '../../../src/server';

describe('Lists controller routes', () => {
    it('mounts getRandomList endpoint', async () => {
        const res = await request(app).get('/lists/random');

        expect(res.status).toEqual(200);
    });
});
