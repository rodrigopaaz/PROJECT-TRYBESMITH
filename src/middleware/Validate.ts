import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import statusCodes from '../utils/statusCodes';

const loginSchema = Joi.object().keys({
  username: Joi.string().min(3).required(),
  password: Joi.string().required(),  
});

const userSchema = Joi.object().keys({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),  
  level: Joi.number().min(1).required(),  
  password: Joi.string().min(8).required(),  
});

const productSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),  
});

const orderSchema = Joi.object().keys({ 
  productsIds: Joi.array().min(1).required().messages({
    'array.min': '"productsIds" must include only numbers',
  }),
});

const checkLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const validation = loginSchema.validate({ ...body });
  if (validation.error) {
    return res.status(statusCodes.BAD_REQUEST)
      .json({ message: validation.error.message });
  }

  next();
};

const checkUser = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const validation = userSchema.validate({ ...body });
  if (validation.error) {
    const { message } = validation.error;
    const errorType = message.includes('required');
    const error = errorType ? 400 : 422;
    return res.status(error)
      .json({ message });
  }

  next();
};
const checkProducts = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const validation = productSchema.validate({ ...body });
  if (validation.error) {
    const { message } = validation.error;
    const errorType = message.includes('required');
    const error = errorType ? 400 : 422;
    return res.status(error)
      .json({ message });
  }

  next();
};

const checkOrder = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const validation = orderSchema.validate({ productsIds: body.productsIds });
  if (validation.error) {
    const { message } = validation.error;
    const errorType = message.includes('required');
    const error = errorType ? 400 : 422;
    return res.status(error)
      .json({ message });
  }

  next();
};

const validateFields = {
  checkLogin, checkProducts, checkUser, checkOrder,
};

export default validateFields;
