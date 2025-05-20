'use server'

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
import bcrypt from 'bcrypt';
import { signIn } from "next-auth/react";
import { AuthError } from 'next-auth';


const FormSchema = z.object({
  userEmailName: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(25, { message: "Username must not be more than 25 characters" })
  ,
  userPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
  ,
  userid: z.number(),
  date: z.string()
}
)

export type State = {
  errors?: {
    userEmailName?: string[];
    userPassword?: string[];
  };
  message?: string | null;
};

const CreateUser = FormSchema.omit({ userid: true, date: true })

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function registerUser(prevState: State, formData: FormData) {

  const validatedFields = CreateUser.safeParse({
    userEmailName: formData.get('userEmailName'),
    userPassword: formData.get('userPassword')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  const { userEmailName, userPassword } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(userPassword, 10)
  const dateCreated = new Date();

  try {
    await sql`
       INSERT INTO users ( user_email_name, user_password, date_created)
       VALUES (${userEmailName},${hashedPassword}, ${dateCreated})
       `;

  } catch (error: any) {

    return {
      message: 'Error, failed to register user, please try again'
    }
  }
  revalidatePath('/register');
  redirect('/signin')

}




