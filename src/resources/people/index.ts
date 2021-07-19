import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';

import { addPerson, getPeople } from './people.controller';

const router = Router();

router.post('/', expressAsyncHandler(addPerson));
router.get('/', expressAsyncHandler(getPeople));

export default router;
