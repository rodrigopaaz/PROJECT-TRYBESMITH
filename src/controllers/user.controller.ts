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
      return res.status(statusCodes.CREATED).json({ token: createToken(userCreated) });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
}

export default UserController;