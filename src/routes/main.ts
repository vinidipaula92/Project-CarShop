import CarController from '../controllers/Car.controller';
import CarModel from '../models/Car';
import CarService from '../services/car.servic';

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

export default carController;
