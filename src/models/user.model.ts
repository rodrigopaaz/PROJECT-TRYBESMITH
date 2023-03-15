import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const { username, vocation, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader & IUser>(
      `INSERT INTO Trybesmith.users (username, vocation, level, password)
        VALUES (?, ?, ?, ?)`,
      [username, vocation, level, password],
    );
    const { insertId } = result;

    return { id: insertId, ...user };
  }
}