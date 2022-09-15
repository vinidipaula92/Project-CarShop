import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import carRoute from './routes/car.route';

const app = express();

app.use('/cars', carRoute);
app.use(errorHandler);

export default app;
