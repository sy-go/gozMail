import {  logOut } from "@/app/actions/logOut"
import { redirect } from 'next/navigation';

export default function LogOut() {

    return (
        <form
            action={ logOut }
            className="login-form p-2 ">
                        <div>
                <button
                    type="submit"
                    className="w-full bg-blue-300 rounded-md p-2 hover:bg-green-600 hover:text-white transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >LogOff
                </button>
            </div>

        </form>
    )
}