import chai from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import Motorcycle from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/motorcycle.servic';
import { motorcycleMockWithId } from '../../mocks/motorcycleMock';
const { expect } = chai;

describe('Motorcycle service', () => {
  const motorcycleModel = new Motorcycle();
  const motorcycleService = new MotorcycleService(motorcycleModel);

  before(() => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
    sinon.stub(motorcycleModel, 'read').resolves([motorcycleMockWithId]);
    sinon.stub(motorcycleModel, 'readOne').onCall(0).resolves(motorcycleMockWithId)
    .onCall(1).resolves(null);
    sinon.stub(motorcycleModel, 'update').resolves(motorcycleMockWithId);
    sinon.stub(motorcycleModel, 'delete').onCall(0).resolves(motorcycleMockWithId)
    .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('create a new motorcycle', () => {
    it('sucessfully created a new motorcycle', async () => {
      const motorcycle = await motorcycleService.create(motorcycleMockWithId);
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('invalid motorcycle', async () => {
      try {
        await motorcycleService.create({} as any);
      } catch (error:any) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('get all motorcycles', () => {
    it('sucessfully get all motorcycles', async () => {
      const motorcycles = await motorcycleService.read();
      expect(motorcycles).to.be.deep.equal([motorcycleMockWithId]);
    });
  });

  describe('get a motorcycle by id', () => {
    it('sucessfully get a motorcycle by id', async () => {
      const motorcycle = await motorcycleService.readOne(motorcycleMockWithId._id);
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
    it('_id not found', async () => {
      try {
        await motorcycleService.readOne('123WRONGID');
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('EntityNotFound');
      }
    });
  });

  describe('update a motorcycle by id', () => {
    it('sucessfully update a motorcycle by id', async () => {
      const motorcycle = await motorcycleService.update(motorcycleMockWithId._id, motorcycleMockWithId);
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
    it('_id not found', async () => {
      try {
        await motorcycleService.update('123WRONGID', motorcycleMockWithId);
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('EntityNotFound');
      }
    });
  });

  describe('delete a motorcycle by id', () => {
    it('sucessfully delete a motorcycle by id', async () => {
      const motorcycle = await motorcycleService.delete(motorcycleMockWithId._id);
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
    it('_id not found', async () => {
      try {
        await motorcycleService.delete('123WRONGID');
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('EntityNotFound');
      }
    });
  });
})