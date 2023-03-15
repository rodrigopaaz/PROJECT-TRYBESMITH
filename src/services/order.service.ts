import { IOrder } from '../interface';
import connection from '../models/connection';
import OrderModel from '../models/user.order';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getOrder() : Promise<IOrder[]> {
    return this.model.getOrder();   
  } 
}

export default OrderService;