import { Router } from 'express';

import UserControler from '../controllers/user.controller';

const router = Router();

const userControler = new UserControler();

router.post('/', userControler.create);

router.get('/', userControler.getAll);

export default router;