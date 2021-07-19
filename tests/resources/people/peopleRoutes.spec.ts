import request from 'supertest';
import { mocked } from 'ts-jest/utils';
import { app } from '../../../src/server';

import * as peopleDao from '../../../src/db/people/peopleDao';
jest.mock('../../../src/db/people/peopleDao');

describe('Lists controller routes', () => {
    beforeEach(() => {
        mocked(peopleDao.addPerson).mockResolvedValue({});
    });

    afterEach(() => {
        mocked(peopleDao.addPerson).mockClear();
    });

    it('mounts addPerson endpoint', async () => {
        const res = await request(app).post('/people').send({ firstName: 'Test', lastName: 'User' });

        expect(res.status).toEqual(201);
    });
});
