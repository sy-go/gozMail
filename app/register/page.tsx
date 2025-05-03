import Link from 'next/link'

export default function registerPage() {

    return (
        <div className='m-4'>
            <Link
                href='./'
                className='border rounded-md p-2 m-2'
            >Main</Link>
            <div className='m-2'>Register new user
                <form action="">
                    
                </form>
            </div>

        </div>

    )
}