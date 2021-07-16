import express from 'express';

import apiRouter from './resources';

const app = express();

app.use(apiRouter);

const PORT = process.env.PORT || 5000;

const start = (): void => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

export { start, app };
