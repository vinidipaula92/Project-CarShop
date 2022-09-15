import CarController from '../controllers/Car.controller';
import MotorcycleController from '../controllers/Motorcycle.controller';
import CarModel from '../models/Car';
import Motorcycle from '../models/Motorcycle';
import CarService from '../services/car.servic';
import MotorcycleService from '../services/motorcycle.servic';

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

const motorcycle = new Motorcycle();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

export { carController, motorcycleController };
