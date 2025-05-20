import Link from 'next/link'
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';


export default function SideNav() {
    return (
        <div className='w-1/10 p-2'>
            <div>
                <Link
                    href='/mail/compose'
                    className="block w-full mb-2 bg-blue-200 rounded-md px-4 py-2 hover:bg-blue-300 transition"
                >compose</Link>
            </div>
            <div>
                <Link
                    href='/mail/inbox'
                    className="block w-full mb-2 bg-blue-200 rounded-md px-4 py-2 hover:bg-blue-300 transition"
                >inbox</Link>
            </div>
            <div>
                <Link
                    href='/mail/sent'
                    className="block w-full mb-2 bg-blue-200 rounded-md px-4 py-2 hover:bg-blue-300 transition"
                >sent</Link>
            </div>
            <div>
                <Link
                    href='/mail/spam'
                    className="block w-full mb-2 bg-blue-200 rounded-md px-4 py-2 hover:bg-blue-300 transition"
                >spam</Link>
            </div>
            <div>
                <Link
                    href='/mail/bin'
                    className="block w-full mb-2 bg-blue-200 rounded-md px-4 py-2 hover:bg-blue-300 transition"
                >bin</Link>
            </div>
            <form
                action={async () => {
                    'use server';
                    await signOut({ redirectTo: '/' });
                }}
            >
                <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Sign Out</div>
                </button>
            </form>
            <form
                action={async () => {
                    'use server';
                    await signOut({ redirectTo: '/' });
                }}
            ></form>
        </div>
    )
}