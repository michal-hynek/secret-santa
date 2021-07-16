import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';

import { addPerson } from './people.controller';

const router = Router();

router.post('/', expressAsyncHandler(addPerson));

export default router;
