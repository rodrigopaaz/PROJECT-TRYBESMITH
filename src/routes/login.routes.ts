import { Router } from 'express';
import validate from '../middleware/Validate';
import ValidadeLogin from '../middleware/validateLogin';

import LoginControler from '../controllers/login.controller';

const router = Router();

const loginControler = new LoginControler();

router.post('/', validate.checkLogin, ValidadeLogin, loginControler.login);

export default router;