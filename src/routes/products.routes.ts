import { Router } from 'express';
import validate from '../middleware/Validate';

import ProductsControler from '../controllers/products.controller';

const router = Router();

const productControler = new ProductsControler();

router.post('/', validate.checkProducts, productControler.create);

router.get('/', productControler.getAll);

export default router;