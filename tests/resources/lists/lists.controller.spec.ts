import httpMocks from 'node-mocks-http';

import { getList } from '../../../src/resources/lists/lists.controller';

describe('Lists Controller', () => {
    const mockNext = jest.fn();
    let response = httpMocks.createResponse();

    beforeEach(() => {
        response = httpMocks.createResponse();
    });

    describe('getRandomList', () => {
        it('returns 200', async () => {
            const request = httpMocks.createRequest();

            await getList(request, response, mockNext);

            expect(response.statusCode).toEqual(200);
        });
    });
});
