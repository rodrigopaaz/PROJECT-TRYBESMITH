import { IUser } from '../interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public getAll() : Promise<IUser[]> {
    return this.model.getAll();   
  } 

  public create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
}

export default UserService;