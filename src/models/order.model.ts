import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getOrder(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute< RowDataPacket[] & IOrder[]>(
      `SELECT ord.id, ord.user_id as userId, JSON_ARRAYAGG(prod.id) as productsIds 
      FROM Trybesmith.orders as ord
      INNER JOIN Trybesmith.products as prod
      ON ord.id = prod.order_id
      GROUP BY ord.id`,
    );

    return rows;
  }

  public async create(userId: number): Promise<number> {
    const [result] = await this.connection.execute<ResultSetHeader & IOrder[]>(
      'INSERT INTO  Trybesmith.orders (user_id) VALUES (?)',
      [userId],
    );

    const { insertId } = result;
     
    return insertId;
  }
}