import { Router } from 'express';

import peopleRouter from './people';
import listsRouter from './lists';

const apiRouter = Router();

apiRouter.use('/people', peopleRouter);
apiRouter.use('/lists', listsRouter);

export default apiRouter;
