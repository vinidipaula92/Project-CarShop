import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import IService from '../interfaces/IService';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    req: Request & { body: IMotorcycle },
    res: Response,
  ) {
    const createdMotorcycle = await this._service.create(req.body);
    return res.status(201).json(createdMotorcycle);
  }

  public async read(_req: Request, res: Response<IMotorcycle[]>) {
    const motorcycles = await this._service.read();
    return res.status(200).json(motorcycles);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const motorcycle = await this._service.readOne(req.params.id);
    return res.status(200).json(motorcycle);
  }

  public async update(
    req: Request & { body: IMotorcycle },
    res: Response<IMotorcycle>,
  ) {
    const updatedMotorcycle = await this._service.update(req.params.id, req.body);
    return res.status(200).json(updatedMotorcycle);
  }

  public async delete(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const deletedMotorcycle = await this._service.delete(req.params.id);
    return res.status(204).json(deletedMotorcycle);
  }
}