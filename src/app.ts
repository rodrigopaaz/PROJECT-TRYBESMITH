import express from 'express';

import userRouter from './routes/user.routes';

import productRouter from './routes/products.routes';

import orderRouter from './routes/order.routes';

import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('/orders', orderRouter);

app.use('/login', loginRouter);

app.use(userRouter);

app.use(productRouter);

app.use(orderRouter);

export default app;
