import express from 'express';
import ProductsController from './controllers/products.controller';
import productRouter from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter)

app.use(productRouter)

export default app;
