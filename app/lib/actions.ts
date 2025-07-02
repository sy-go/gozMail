'use server'

import { z } from 'zod';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import bcrypt from 'bcrypt'; // or 'bcryptjs'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';


const queryClient = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 const db = drizzle(queryClient);




