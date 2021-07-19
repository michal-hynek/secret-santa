import express from 'express';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';

import apiRouter from './resources';
import { createDb } from './db/createDb';

dotenv.config();
const app = express();

app.use(express.json());
app.use(apiRouter);

const PORT = process.env.PORT || 8080;

const db = new sqlite3.Database(':memory:');

const start = async (): Promise<void> => {
    console.log('Initializing the database...');
    await createDb(db);
    console.log('Database initialized');

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

export { start, app, db };
