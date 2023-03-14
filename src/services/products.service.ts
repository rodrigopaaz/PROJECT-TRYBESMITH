import { IProduct } from '../interface';
import connection from '../models/connection';
import ProductModel from '../models/products.model';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: IProduct): Promise<IProduct> {
    return this.model.create(product);
  }

  public getAll() : Promise<IProduct[]> {
    return this.model.getAll();   
  } 
}

export default ProductService;