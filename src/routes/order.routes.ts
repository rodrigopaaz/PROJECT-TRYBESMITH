import { Router } from 'express';

import OrderControler from '../controllers/orders.controller';

const router = Router();

const orderControler = new OrderControler();

router.get('/', orderControler.getOrder);

export default router;