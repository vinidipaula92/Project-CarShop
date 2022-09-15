import chai from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import Motorcycle from '../../../models/Motorcycle';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';
const { expect } = chai;

describe('Motorcycle model', () => {
  const motorcycleModel = new Motorcycle();
  before(() => {
    sinon.stub(Model, 'create').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'find').resolves([motorcycleMockWithId]);
    sinon.stub(Model, 'findOne').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(motorcycleMockWithId);
  });

  after(()=>{
    sinon.restore();
  });

  describe('create a new motorcycle', () => {
    it('sucessfully created a new motorcycle', async () => {
      const motorcycle = await motorcycleModel.create(motorcycleMock);
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
  });

  describe('get all motorcycles', () => {
    it('sucessfully get all motorcycles', async () => {
      const motorcycles = await motorcycleModel.read();
      expect(motorcycles).to.be.deep.equal([motorcycleMockWithId]);
    });
  });

  describe('get a motorcycle by id', () => {
    it('sucessfully get a motorcycle by id', async () => {
      const motorcycle = await motorcycleModel.readOne(motorcycleMockWithId._id);
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('_id not found', async () => {
      try {
        await motorcycleModel.readOne('123WRONGID');
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });

  describe('update a motorcycle by id', () => {
    it('sucessfully update a motorcycle by id', async () => {
      const motorcycle = await motorcycleModel.update(motorcycleMockWithId._id, motorcycleMock);
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('_id not found', async () => {
      try {
        await motorcycleModel.update('123WRONGID', motorcycleMock);
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });

  describe('delete a motorcycle by id', () => {
    it('sucessfully delete a motorcycle by id', async () => {
      const motorcycle = await motorcycleModel.delete(motorcycleMockWithId._id);
      expect(motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('_id not found', async () => {
      try {
        await motorcycleModel.delete('123WRONGID');
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });
});