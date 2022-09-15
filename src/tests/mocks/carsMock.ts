import { ICar } from "../../interfaces/ICar";

export const carMock: ICar = {
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}

export const carMockWithId: ICar & { _id: string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}

export const carMockForChange: ICar = {
  model: "Honda Fit",
  year: 2014,
  color: "silver",
  buyValue: 53000,
  seatsQty: 5,
  doorsQty: 4
}