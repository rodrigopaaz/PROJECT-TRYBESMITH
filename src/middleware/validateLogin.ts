import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';
import UserService from '../services/user.service';

const ValidadeLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const userService = new UserService();
  const data = await userService.getAll();
  const validateUser = data.find(({ username }) => username === body.username);
  const validatePassword = data.find(({ password }) => password === body.password);
  if (!validateUser || !validatePassword) {
    return res.status(statusCodes.UNAUTHORIZED)
      .json({ message: 'Username or password invalid' }); 
  }
  body.userData = validateUser;
  next();
};

export default ValidadeLogin;