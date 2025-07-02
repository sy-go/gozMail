import { z } from 'zod';

export type User = {

  userName: string,
  password: string
}

export type DBUser = {
  id: string; // UUID
  email: string;
  user_password: string;
  date_created: string;
  userId: number;
};

// const isoWithTimezoneRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

export type SessionPayload = {
  userId: string;        // UUID or database user ID         
  issuedAt?: number;     // Optional: timestamp of session creation
  expiresAt?: number ;    // Optional: session expiration timestamp
};


export const registerUserSchema = z.object({
  username: z.string({ message: 'Enter a valid username.' })
  .min(2,{message: 'min 2 characters'})
  .max(15, {message: 'max 15 characters'})
  .trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .max(20,{ message: ' max 20 characters'})
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, {
      message: 'Must contain letters, numbers, and special characters',
    })
    .trim(),
});

export const loginUserSchema = z.object({
  username: z
  .string({ message: 'Enter a valid username.' })
  .min(2, {message: 'invalid username'})
  .max(20, { message: 'invalid username'})
  .trim(),
  password: z
    .string()
    .min(8, { message: 'Must be at least 8 characters long' })
    .max(30,{message:'password too long'})
    .trim()
});