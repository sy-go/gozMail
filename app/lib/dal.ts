import 'server-only'

import { cookies } from 'next/headers';
import { decrypt } from '@/app/lib/session';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';
import * as schema from '@/app/lib/db.schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

type Session = {
  userId: string;
  // any other expected fields
};


const queryClient = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

 const db = drizzle(queryClient, { schema });

 const { users } = schema;


export const verifySession = cache( async () =>{
    const cookie =  (await cookies()).get('session')?.value;
    const session = await decrypt( cookie ) as Session;

    if( !session?.userId) {
        redirect('/login')
    }

    return { isAuth: true,  userId: session.userId }
})



export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) return null
 
  try {
   const data = await db.query.users.findMany({
      where: eq(users.userid, session.userId),
      // Explicitly return the columns you need rather than the whole user object
      columns: {
        userid: true,
        username: true,
        
      },
    })
 
    const user = data[0];

    return user;

  } catch (error) {
    console.log('Failed to fetch user, error:' + error)
    return null
  }
})