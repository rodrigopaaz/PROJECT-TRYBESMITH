import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import statusCodes from '../utils/statusCodes';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getOrder = async (req: Request, res: Response) => {
    const getOrders = await this.orderService.getOrder();
    return res.status(statusCodes.OK).json(getOrders);
  };
}

export default OrderController;