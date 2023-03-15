import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import statusCodes from '../utils/statusCodes';

const bodySchema = Joi.object().keys({
  username: Joi.string().min(3).required(),
  password: Joi.string().required(),  
});

const Validade = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const validation = bodySchema.validate({ username, password });
  if (validation.error) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: validation.error.message });
  }

  next();
};

export default Validade;