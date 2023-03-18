import { IOrder, IProduct } from '../interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/products.model';

class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public getOrder() : Promise<IOrder[]> {
    return this.model.getOrder();   
  }
  
  public async create(order: IOrder & number, productIds:number[]) {
    const result = await this.model.create(order);
     
    await Promise.all(productIds.map((e:number) => 
      this.productModel.update(result, e))); 
    return result;
  }
}

export default OrderService;