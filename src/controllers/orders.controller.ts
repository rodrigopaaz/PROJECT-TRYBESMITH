import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import statusCodes from '../utils/statusCodes';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getOrder = async (req: Request, res: Response) => {
    const getOrders = await this.orderService.getOrder();
    return res.status(statusCodes.OK).json(getOrders);
  };

  public create = async (req: Request, res: Response) => {
    const { productsIds, getData } = req.body;

    await this.orderService.create(getData.data.id, productsIds);

    return res.status(statusCodes.CREATED).json(
      {
        userId: getData.data.id,
        productsIds,
      },
    );
  };
}

export default OrderController;