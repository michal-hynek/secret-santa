import { Database } from 'sqlite3';

export const addPerson = async (firstName: string, lastName: string, db: Database): Promise<any> => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT into people(firstName, lastName) VALUES('${firstName}', '${lastName}')`;

        // Note: can't use the arrow function because it breaks the reference for this.lastID
        db.run(sql, function (error) {
            if (error) {
                return reject(error);
            }

            resolve({
                id: this.lastID,
                firstName,
                lastName,
            });
        });
    });
};

export const getPeople = async (db: Database): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        db.all('select * from people', (error, rows) => {
            if (error) {
                reject(error);
            }

            resolve(rows);
        });
    });
};
