// middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers';

 
// 1. Specify protected and public routes
const protectedRoutes = ['/mail'];
const publicRoutes = ['/login', '/register', '/'];


export default async function middleware(request: NextRequest) {

  // 2. Check if the current route is protected or public
const path = request.nextUrl.pathname;

const isProtectedRoute = protectedRoutes.includes(path);
const isPublicRoute = publicRoutes.includes(path);

// 3. Decrypt the session from the cookie
const cookie = request.cookies.get('session')?.value;

const session = await decrypt(cookie);

// 4. Redirect to /login if the user is not authenticated
if( isProtectedRoute && !session?.userId) {
  return NextResponse.redirect( new URL('/login', request.nextUrl))
}

// 5. Redirect to /dashboard if the user is authenticated
if(
  isPublicRoute &&
  session?.userId &&
  !request.nextUrl.pathname.startsWith('/mail')
) {
  return NextResponse.redirect(new URL('/mail', request.nextUrl))
}
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!login|register|$).*)'], // Adjust this to match your protected routes
};
