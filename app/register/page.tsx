'use client'

import Link from 'next/link'
import  SignupForm  from '@/app/ui/signUpUser'


export default function registerPage() {

    return (
        <div className='m-1 md:m-4 mt-4'>
            <Link href='./' className='border rounded-md p-2 m-2'>Main</Link>
            <Link 
        href='/login'      
          className="border rounded-md p-2 m-2"
        >Sign in</Link>
            <div className="flex items-center justify-center  min-h-screen m-0.5">
                <div className='w-full md:w-2/6'>
                    <SignupForm />
                </div>
            </div>
        </div>

    )
}




