import Link from 'next/link'
import { PowerIcon } from '@heroicons/react/24/outline';
import { logOut } from '@/app/actions/logOut'


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
            
            
        </div>
    )
}