import Link from 'next/link';
import  SignIn  from '@/app/ui/signinForm';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className='m-4'>
      <Link href='/' className='border rounded-md p-2 m-2'>Main</Link>
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <Suspense>
            <SignIn />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
