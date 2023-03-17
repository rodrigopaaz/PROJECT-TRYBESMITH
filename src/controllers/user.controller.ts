import { Request, Response } from 'express';
import { createToken } from '../auth/jwtToken';
import UserService from '../services/user.service';
import statusCodes from '../utils/statusCodes';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    try {
      return res.status(statusCodes.CREATED).json({ token: createToken(userCreated), userCreated });
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  public getAll = async (req: Request, res: Response) => {
    const getUsers = await this.userService.getAll();
    return res.status(statusCodes.OK).json(getUsers);
  };
}

export default UserController;