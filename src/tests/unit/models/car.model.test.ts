import chai from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import CarModel from '../../../models/Car';
import { carMock, carMockForChange, carMockWithId } from '../../mocks/carsMock';
const { expect } = chai;

describe('Car model', () => {
  const carModel = new CarModel();
  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  });

  describe('create a new car', () => {
    it('sucessfully created a new car', async () => {
      const car = await carModel.create(carMock);
      expect(car).to.be.deep.equal(carMockWithId);
    });
  });
  describe('get all cars', () => {
    it('sucessfully get all cars', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.deep.equal([carMockWithId]);
    });
  });
  describe('get a car by id', () => {
    it('sucessfully get a car by id', async () => {
      const car = await carModel.readOne(carMockWithId._id);
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      try {
        await carModel.readOne('123WRONGID');
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });
  describe('update a car by id', () => {
    it('sucessfully update a car by id', async () => {
      const car = await carModel.update(carMockWithId._id, carMockForChange);
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      try {
        await carModel.update('123WRONGID', carMockForChange);
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });

  describe('delete a car by id', () => {
    it('sucessfully delete a car by id', async () => {
      const car = await carModel.delete(carMockWithId._id);
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      try {
        await carModel.delete('123WRONGID');
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('InvalidMongoId');
      }
    });
  });
});