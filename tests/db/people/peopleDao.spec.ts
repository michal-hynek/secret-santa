import { Database } from 'sqlite3';

import * as peopleDao from '../../../src/db/people/peopleDao';
import { createDb } from '../../../src/db/createDb';

describe('peopleDao', () => {
    describe('addPerson', () => {
        it('returns newly created person', async () => {
            const db = new Database(':memory:');
            await createDb(db);

            const response = await peopleDao.addPerson('Test', 'User', db);

            expect(response.firstName).toEqual('Test');
            expect(response.lastName).toEqual('User');
            expect(response.id).toBeGreaterThan(0);

            db.close();
        });
    });
});
