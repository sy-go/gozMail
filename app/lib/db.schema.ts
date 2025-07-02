
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { pgTable, uuid, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';


export const users = pgTable('users', {
  userid: uuid('userid').primaryKey().defaultRandom(),
  username: text('username').notNull().unique(),
  user_password: text('user_password').notNull(),
  date_created: timestamp('date_created', { withTimezone: true }).defaultNow().notNull(),
  userSerial: integer('userserial').generatedAlwaysAsIdentity(),
  is_active: boolean('is_active').default(true),
  last_login: timestamp('last_login', { withTimezone: true }),
  role: text('role').notNull().default('user')
});

const queryClient = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
export const db = drizzle(queryClient) //  to log if query was succesfull, add { logger: true } as second parameter