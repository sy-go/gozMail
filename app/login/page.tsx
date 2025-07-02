'use client'

import Link from 'next/link';
import LoginForm from '@/app/ui/userLogIn';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const user = searchParams.get('user');



  return (
    <div className='m-1 md:m-4 mt-4'>
      <Link href='/' className='border rounded-md p-2 m-2'>Main</Link>
      <Link
        href='/register'
        className="border rounded-md p-2 m-2">Register</Link>
      <div className="flex items-center justify-center  min-h-screen m-0.5">
        <div className='w-full md:w-2/6'>
          {success && user && (
            <div className="alert alert-success">
              User <b>{user}</b> successfully registered! Please log in.
            </div>
          )}
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
