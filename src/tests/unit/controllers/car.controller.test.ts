import chai from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import CarController from '../../../controllers/Car.controller';
import Car from '../../../models/Car';
import CarService from '../../../services/car.servic';
import { carMock, carMockForChange, carMockWithId } from '../../mocks/carsMock';
const { expect } = chai;

describe('Sua descrição', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'read').resolves([carMock]);
    sinon.stub(carService, 'readOne').resolves(carMock);
    sinon.stub(carService, 'update').resolves(carMock);
    sinon.stub(carService, 'delete').onCall(0).resolves(carMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  });

  describe('create a new car', () => {
    it('sucessfully created a new car', async () => {
      req.body = carMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('read all cars', () => {
    it('sucessfully read all cars', async () => {
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMock])).to.be.true;
    });
  });

  describe('read one car', () => {
    it('sucessfully read one car', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('update a car', () => {
    it('sucessfully update a car', async () => {
      req.params = { id: carMockWithId._id };
      req.body = carMockForChange;
      await carController.update(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('delete a car', () => {
    it('sucessfully delete a car', async () => {
      req.params = { id: carMockWithId._id };
      await carController.delete(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });
});