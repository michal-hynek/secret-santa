import { Database } from 'sqlite3';

export const createDb = (db: Database): Promise<void> => {
    return new Promise((resolve, reject) => {
        db.run(
            'create table people(id INTEGER PRIMARY KEY AUTOINCREMENT, firstName VARCHAR(255), lastName VARCHAR(255))',
            (err) => {
                if (err) {
                    return reject(err.message);
                }

                return resolve();
            },
        );
    });
};
