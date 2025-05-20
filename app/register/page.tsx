'use client'

import Link from 'next/link'
import CreateUserForm from '@/app/ui/createUserForm'


export default function registerPage() {

    return (
        <div className='m-4'>
            <Link href='./' className='border rounded-md p-2 m-2'>Main</Link>
            <div className="flex items-center justify-center min-h-screen">
                <div >
                    <CreateUserForm />
                </div>
            </div>
        </div>

    )
}




