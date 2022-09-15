import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request & { body: ICar },
    res: Response<ICar>,
  ) {
    const createdCar = await this._service.create(req.body);
    return res.status(201).json(createdCar);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const cars = await this._service.read();
    return res.status(200).json(cars);
  }

  public async readOne(
    req: Request,
    res: Response<ICar>,
  ) {
    const car = await this._service.readOne(req.params.id);
    return res.status(200).json(car);
  }

  public async update(
    req: Request & { body: ICar },
    res: Response<ICar>,
  ) {
    const updatedCar = await this._service.update(req.params.id, req.body);
    return res.status(200).json(updatedCar);
  }

  public async delete(
    req: Request,
    res: Response<ICar>,
  ) {
    const deletedCar = await this._service.delete(req.params.id);
    return res.status(200).json(deletedCar);
  }
}