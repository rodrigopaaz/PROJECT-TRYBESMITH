import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import statusCodes from '../utils/statusCodes';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    return res.status(statusCodes.CREATED).json(productCreated);
  };
}

export default ProductsController;