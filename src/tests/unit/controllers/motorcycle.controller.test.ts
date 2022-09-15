import chai from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import MotorcycleController from '../../../controllers/Motorcycle.controller';
import Motorcycle from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/motorcycle.servic';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';
const { expect } = chai;

describe('Motorcycle controller', () => {
  const motorcycleModel = new Motorcycle();
  const motorcycleService = new MotorcycleService(motorcycleModel);
  const motorcycleController = new MotorcycleController(motorcycleService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(motorcycleService, 'create').resolves(motorcycleMock);
    sinon.stub(motorcycleService, 'read').resolves([motorcycleMock]);
    sinon.stub(motorcycleService, 'readOne').resolves(motorcycleMock);
    sinon.stub(motorcycleService, 'update').resolves(motorcycleMock);
    sinon.stub(motorcycleService, 'delete').onCall(0).resolves(motorcycleMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  });

  describe('create a new motorcycle', () => {
    it('sucessfully created a new motorcycle', async () => {
      req.body = motorcycleMock;
      await motorcycleController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('get all motorcycles', () => {
    it('sucessfully get all motorcycles', async () => {
      await motorcycleController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([motorcycleMock])).to.be.true;
    });
  });

  describe('get one motorcycle', () => {
    it('sucessfully get one motorcycle', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await motorcycleController.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('update a motorcycle', () => {
    it('sucessfully update a motorcycle', async () => {
      req.params = { id: motorcycleMockWithId._id };
      req.body = motorcycleMock;
      await motorcycleController.update(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('delete a motorcycle', () => {
    it('sucessfully delete a motorcycle', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await motorcycleController.delete(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });
});