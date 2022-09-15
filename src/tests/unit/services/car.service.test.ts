import chai from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import Car from '../../../models/Car';
import CarService from '../../../services/car.servic';
import { carMockForChange, carMockWithId } from '../../mocks/carsMock';
const { expect } = chai;

describe('Car Service', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves([carMockWithId]);
    sinon.stub(carModel, 'readOne').onCall(0).resolves(carMockWithId)
    .onCall(1).resolves(null);
    sinon.stub(carModel, 'update').resolves(carMockWithId);
    sinon.stub(carModel, 'delete').onCall(0).resolves(carMockWithId)
    .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  });

  describe('create a new car', () => {
    it('sucessfully created a new car', async () => {
      const car = await carService.create(carMockWithId);
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it('invalid car', async () => {
      try {
        await carService.create({} as any);
      } catch (error:any) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('get all cars', () => {
    it('sucessfully get all cars', async () => {
      const cars = await carService.read();
      expect(cars).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('get a car by id', () => {
    it('sucessfully get a car by id', async () => {
      const car = await carService.readOne(carMockWithId._id);
      expect(car).to.be.deep.equal(carMockWithId);
    });
    it('_id not found', async () => {
      try {
        await carService.readOne('123WRONGID');
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('EntityNotFound');
      }
    });
  });

  describe('update a car by id', () => {
    it('sucessfully update a car by id', async () => {
      const car = await carService.update(carMockWithId._id, carMockForChange);
      expect(car).to.be.deep.equal(carMockWithId);
    });
    it('invalid car', async () => {
      try {
        await carService.update(carMockWithId._id, {} as any);
      } catch (error:any) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });

    it('_id not found', async () => {
      try {
        await carService.update('123WRONGID', carMockForChange);
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('EntityNotFound');
      }
    });
  });

  describe('delete a car by id', () => {
    it('sucessfully delete a car by id', async () => {
      const car = await carService.delete(carMockWithId._id);
      expect(car).to.be.deep.equal(carMockWithId);
    });
    it('_id not found', async () => {
      try {
        await carService.delete('123WRONGID');
      } catch (error:any) {
        expect(error.message).to.be.deep.equal('EntityNotFound');
      }
    });
  });
});