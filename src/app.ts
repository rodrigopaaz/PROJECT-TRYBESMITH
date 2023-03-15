import express from 'express';

import userRouter from './routes/user.routes';

import productRouter from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use(userRouter);

app.use(productRouter);

export default app;
