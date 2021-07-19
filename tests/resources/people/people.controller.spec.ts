import httpMocks from 'node-mocks-http';
import { mocked } from 'ts-jest/utils';

import { addPerson } from '../../../src/resources/people/people.controller';

import * as peopleDao from '../../../src/db/people/peopleDao';
jest.mock('../../../src/db/people/peopleDao');

import * as server from '../../../src/server';
jest.mock('../../../src/server');

describe('People Controller', () => {
    const mockPerson = { id: 1, firstName: 'Test', lastName: 'User' };
    const mockNext = jest.fn();
    let response = httpMocks.createResponse();

    beforeEach(() => {
        response = httpMocks.createResponse();
        mocked(peopleDao.addPerson).mockResolvedValue(mockPerson);
    });

    afterEach(() => {
        mocked(peopleDao.addPerson).mockClear();
    });

    describe('addPerson', () => {
        it('returns 201 status code', async () => {
            const request = httpMocks.createRequest();
            request.body = { firstName: 'Test', lastName: 'User' };

            await addPerson(request, response, mockNext);

            expect(response.statusCode).toEqual(201);
        });

        it('calls peopleDao.addPerson', async () => {
            const request = httpMocks.createRequest();
            request.body = { firstName: 'Test', lastName: 'User' };

            await addPerson(request, response, mockNext);

            expect(peopleDao.addPerson).toHaveBeenCalledWith('Test', 'User', server.db);
        });
    });
});
