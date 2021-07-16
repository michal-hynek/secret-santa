import express from 'express';
import dotenv from 'dotenv';

import apiRouter from './resources';

dotenv.config();
const app = express();

app.use(apiRouter);

const PORT = process.env.PORT || 8080;

const start = (): void => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

export { start, app };
