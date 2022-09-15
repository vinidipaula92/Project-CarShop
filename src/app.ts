import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import carRoute from './routes/car.route';
import motorcycleRoute from './routes/motorcycles.route';

const app = express();
app.use(express.json());

app.use('/cars', carRoute);
app.use('/motorcycles', motorcycleRoute);
app.use(errorHandler);

export default app;
