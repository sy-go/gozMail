import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export const dynamic = 'force-dynamic';

export default async function Page() {
    
    return (
        <div>
            <div className='flex'>
                <div className='w-48  h-screen mt-1   rounded-md bg-slate-200 m-1  '>message title, date</div>
                <div className='w-6/9  h-screen mt-1   rounded-md bg-slate-200  '>message content</div>
            </div>

        </div>
    )
}