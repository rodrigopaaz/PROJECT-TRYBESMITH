import jwt from 'jsonwebtoken';
import { IUser } from '../interface';

const secret = process.env.JWT_SECRET || 'secret';
export const createToken = (user: IUser) => jwt.sign({
  data: { userId: user.id },
}, secret, {
  expiresIn: '15m',
  algorithm: 'HS256',
});

export const verifyToken = (token: string) => jwt.verify(token, secret);
