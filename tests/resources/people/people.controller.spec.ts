import httpMocks from 'node-mocks-http';

import { addPerson } from '../../../src/resources/people/people.controller';

describe('People Controller', () => {
    const mockNext = jest.fn();
    let response = httpMocks.createResponse();

    beforeEach(() => {
        response = httpMocks.createResponse();
    });

    describe('addPerson', () => {
        it('returns 201', async () => {
            const request = httpMocks.createRequest();
            request.body = [{ firstName: 'Test', lastName: 'User' }];

            await addPerson(request, response, mockNext);

            expect(response.statusCode).toEqual(201);
        });
    });
});
