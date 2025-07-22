'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



export default function SideNav() {
    const pathname = usePathname();

    return (
        <div className='w-1/10 p-1 pt-0'>
            <div>
                <Link
                    href='/mail/compose'
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md mb-1 bg-gray-100 p-2 text-sm font-medium hover:text-blue-800  md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-sky-200 text-black-800 font-bold': pathname === '/mail/compose',
                        },
                    )}
                >compose</Link>
            </div>
            <div>
                <Link
                    href='/mail/inbox'
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md mb-1 bg-gray-100 p-2 text-sm font-medium hover:text-blue-800 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-sky-200 text-black-800 font-bold': pathname === '/mail/inbox',
                        },
                    )}
                >inbox</Link>
            </div>
            <div>
                <Link
                    href='/mail/sent'
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md mb-1 bg-gray-100 p-2 text-sm font-medium hover:text-blue-800 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-sky-200 text-black-800 font-bold': pathname === '/mail/sent',
                        },
                    )}
                >sent</Link>
            </div>
            <div>
                <Link
                    href='/mail/spam'
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md mb-1 bg-gray-100 p-2 text-sm font-medium hover:text-blue-800 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-sky-200 text-black-800 font-bold': pathname === '/mail/spam',
                        },
                    )}
                >spam</Link>
            </div>
            <div>
                <Link
                    href='/mail/bin'
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-2 text-sm font-medium hover:text-blue-800 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                            'bg-sky-200 text-black-800 font-bold': pathname === '/mail/bin',
                        },
                    )}
                >bin</Link>
            </div>


        </div>
    )
}