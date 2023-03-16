import { Router } from 'express';
import validate from '../middleware/Validate';

import UserControler from '../controllers/user.controller';

const router = Router();

const userControler = new UserControler();

router.post('/', validate.checkUser, userControler.create);

router.get('/', userControler.getAll);

export default router;