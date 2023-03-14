import { Router } from 'express';

import ProductsControler from '../controllers/products.controller';

const router = Router();

const productControler = new ProductsControler();

router.post('/', productControler.create);

export default router;