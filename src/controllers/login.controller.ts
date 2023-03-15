import { Request, Response } from 'express';
import { IUser } from '../interface';

import UserService from '../services/user.service';
import { createToken } from '../auth/jwtToken';
import statusCodes from '../utils/statusCodes';

class LoginController {
  constructor(private userService = new UserService()) { }

  public getAll() : Promise<IUser[]> {
    return this.userService.getAll();   
  }

  public login = async (req: Request, res: Response) => {
    const { body } = req;
    try {
      return res.status(statusCodes.OK).json({ token: createToken(body) });
    } catch (error) {
      return res.status(500).json(error);
    } 
  };
}

export default LoginController;