import SideNav from '@/app/ui/sideNav'
import  LogOut  from '@/app/ui/logOut'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className=" h-screen  md:overflow-hidden">
            <div className='flex justify-between m-2 pl-8 pr-8'>
                <div>Logo</div>
                <div>
                    logged in as:
                    <div></div>
                </div>
                <div>                    
                    <LogOut />
                </div>
            </div>
            <div className='flex justify-between h-full'>                
                    <SideNav />                
                <div className="flex-grow  md:overflow-y-auto ">{children}</div>
            </div>
        </div>
    )
}