import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  contact: z
    .string()
    .min(1, 'Contact no. is required')
    .regex(/^[\d+\-()\s]+$/, 'Please enter a valid contact number')
    .refine((value) => value.replace(/\D/g, '').length >= 7, {
      message: 'Contact number must be at least 7 digits',
    }),
  message: z.string().min(1, 'Message is required'),
});

export default contactSchema;
