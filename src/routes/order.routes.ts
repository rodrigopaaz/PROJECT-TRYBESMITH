import { Router } from 'express';

import OrderControler from '../controllers/orders.controller';
import validateFields from '../middleware/Validate';
import validateToken from '../middleware/validateToken';

const router = Router();

const orderControler = new OrderControler();

router.get('/', orderControler.getOrder);

router.post('/', validateToken, validateFields.checkOrder, orderControler.create);

export default router;