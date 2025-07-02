'use server';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { users } from'@/app/lib/db.schema'
import { registerUserSchema } from '@/app/lib/definitions'

const queryClient = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
const db = drizzle(queryClient);

type State = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message?: string | null;
} | undefined;


export async function registerUser(state: State, formData: FormData): Promise<State> {
  const validatedFields = registerUserSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Registration failed. Please check your input.',
    };
  }

  const { username, password } = validatedFields.data;
  const registrationDate = new Date();

  // Check if user already exists (prevent username guessing)
  const existingUser = await db.select().from(users).where(eq(users.username, username)).limit(1);
if (existingUser.length > 0) { 
  return { message: 'Registration failed. Please try again later user=true.' };  
}

  // Hash the user's password
  const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await db.insert(users).values({
      username,
      user_password: hashedPassword,
      date_created: registrationDate,
      is_active: true,
      role: 'user',
    });
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Registration failed. Please try again later.' };
  }

  throw redirect('/login')
  
}