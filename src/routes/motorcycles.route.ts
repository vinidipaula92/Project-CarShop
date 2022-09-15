import { Router } from 'express';
import { motorcycleController } from './main';

const route = Router();

route.post('/', (req, res) => motorcycleController.create(req, res));
route.get('/:id', (req, res) => motorcycleController.readOne(req, res));
route.get('/', (req, res) => motorcycleController.read(req, res));
route.put('/:id', (req, res) => motorcycleController.update(req, res));
route.delete('/:id', (req, res) => motorcycleController.delete(req, res));

export default route;