import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;

    const [result] = await this.connection.execute<ResultSetHeader & IProduct>(
      'INSERT INTO  Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const { insertId } = result;

    return { id: insertId, ...product };
  }

  public async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(`
SELECT * FROM Trybesmith.products;
`);
    return rows;
  }

  public async update(orderId:number, productId:number) {
    await this.connection.execute<ResultSetHeader & IProduct>(
      `UPDATE Trybesmith.products
      SET order_id = ?
      WHERE id = ? `,
      [orderId, productId],
    );
  }
}