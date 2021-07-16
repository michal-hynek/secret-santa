import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

import peopleRouter from './people';
import listsRouter from './lists';

const apiRouter = Router();

apiRouter.use('/api-docs', swaggerUi.serve);
apiRouter.get('/api-docs', swaggerUi.setup(swaggerSpec));
apiRouter.get('/api-docs.json', (_, res) => {
    res.status(200).json(swaggerSpec);
});

apiRouter.use('/people', peopleRouter);
apiRouter.use('/lists', listsRouter);

export default apiRouter;
