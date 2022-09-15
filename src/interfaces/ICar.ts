import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().int().positive().gte(2)
    .lte(4),
  seatsQty: z.number().int().gte(2)
    .lte(7),
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar, CarZodSchema };
