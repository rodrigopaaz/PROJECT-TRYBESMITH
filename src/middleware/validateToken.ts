import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/jwtToken';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const payload = verifyToken(authorization);
    req.body.getData = payload;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default validateToken;
