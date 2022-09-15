import { IMotorcycle } from "../../interfaces/IMotorcycle";

export const motorcycleMock: IMotorcycle = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "black",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}

export const motorcycleMockWithId: IMotorcycle & { _id: string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "black",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}

export const motorcycleMockForChange: IMotorcycle = {
  model: "Honda CG Titan 150",
  year: 2014,
  color: "silver",
  buyValue: 53000,
  category: "Street",
  engineCapacity: 150
}