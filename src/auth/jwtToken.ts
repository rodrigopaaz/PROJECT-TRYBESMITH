import jwt, { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../interface';

const secret = process.env.JWT_SECRET || 'secret';
export const createToken = ({ id, username, password }: IUser) => jwt.sign({
  data: { id, username, password },
}, secret, {
  expiresIn: '50h',
  algorithm: 'HS256',
});

export const verifyToken = (token: string): JwtPayload => {
  const payload = jwt.verify(token, secret);
  return payload as JwtPayload;
};
