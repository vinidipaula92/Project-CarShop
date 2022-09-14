import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().int().positive().gte(2, { message: 'Doors quantity must be at least 2' })
    .lte(4, { message: 'Doors quantity must be less than or equal to 4' }),
  seatsQty: z.number().int().gte(2, { message: 'Seats quantity must be at least 2' })
    .lte(7, { message: 'Seats quantity must be less than or equal to 7' }),
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar, CarZodSchema };
