'use server';

import { loginUserSchema } from '@/app/lib/definitions'
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';
import { db, users } from '@/app/lib/db.schema'
import { createSession } from '@/app/lib/session'

type loginState =
  | {
    errors?: {
      username?: string[],
      password?: string[]
    }
    message?: string
  }
  | undefined

export async function loginUser(state: loginState, formData: FormData) {
  // validate form fields
  const validatedFields = loginUserSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  })

  // if ay of fields is invalid return early

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  // prepare for calling database

  const { username, password } = validatedFields.data;

 // check if user exists
  const userResult = await db
    .select()
    .from(users)
    .where(eq(users.username, username))

  const user = userResult[0]

  // return early if no user
  if (!user) {
    return {
      message: 'login error'
    }
  }
  

 // check if password is valid , return early ifinvalid
  const validatedUser = await bcrypt.compare(password, user.user_password)
  if (!validatedUser) {
    return {
      message: 'login error'
    }
  }
 // // if all valid create session and redirect to 'mail'
  await createSession(user.userid)

   // const cookieStore = await cookies(); 
   // const sessionCookie = cookieStore.get('session')?.value   
  //console.log('cookieStore >>' + cookieStore +' //session created, session cookie is: ' + sessionCookie );


  // redirect user after veryfyimg credentials
  redirect('/mail')

}




