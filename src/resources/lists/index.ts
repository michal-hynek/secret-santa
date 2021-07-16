import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';

import { getList } from './lists.controller';

const router = Router();

router.get('/', expressAsyncHandler(getList));

export default router;
