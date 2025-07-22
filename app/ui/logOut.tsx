import {  logOut } from "@/app/actions/logOut"


export default function LogOut() {

    return (
        <form
            action={ logOut }
            className="login-form p-2 ">
                        <div>
                <button
                    type="submit"
                    className='min-w-20 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-900 hover:font-bold' 
                     >Logout
                </button>
            </div>

        </form>
    )
}