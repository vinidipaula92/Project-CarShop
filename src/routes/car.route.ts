import { Router } from 'express';
import { carController } from './main';

const route = Router();

route.post('/', (req, res) => carController.create(req, res));
route.get('/:id', (req, res) => carController.readOne(req, res));
route.get('/', (req, res) => carController.read(req, res));
route.put('/:id', (req, res) => carController.update(req, res));
route.delete('/:id', (req, res) => carController.delete(req, res));

export default route;