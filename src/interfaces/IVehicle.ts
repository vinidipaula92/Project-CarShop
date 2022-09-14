import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string().min(3, { message: 'Model must be at least 3 characters' }),
  year: z.number().positive().gte(1900, { message: 'Year must be at least 1900' })
    .lte(2022, { message: 'The year must be less than or equal to 2022' }),
  color: z.string().min(3, { message: 'Color must be at least 3 characters' }),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { IVehicle, VehicleZodSchema };
