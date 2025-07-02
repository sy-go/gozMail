'use client';

import { loginUser } from '@/app/actions/loginAuth'; // Import the server action
import { useActionState } from 'react';


export default function LoginForm() {
  const [state, action, pending] = useActionState(loginUser, undefined);

  return (
    <form
      action={action}
      className="p-2 border-2 border-blue-200 rounded-2xl flex flex-col items-center justify-center"
    >
      {state?.message && (
  <div className="w-5/6 mb-2 text-red-500 font-medium text-sm text-center">
    {state.message}
  </div>
)}

      <div className="p-2">
        <p className='text-xs italic pb-4'>Optimistic with middleware</p>
        <label htmlFor="username" className="p-2">Login Username</label>
      </div>
      <div className="w-5/6">
        <input
          id="username"
          name="username"
          type="text"
          placeholder="type username"
          className="w-full border-2 rounded-md border-blue-300 p-2 focus:bg-amber-50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      {state?.errors?.username && (
        <p className="text-red-500 text-sm text-left w-5/6">{state.errors.username}</p>
      )}

      <div className="p-2 mt-5">
        <label htmlFor="password" className="p-2">Login Password</label>
      </div>
      <div className="w-5/6">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="type password"
          className="w-full border-2 rounded-md border-blue-300 p-2 focus:bg-amber-50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      {state?.errors?.password && (
        <div className="text-red-500 w-5/6 text-sm mt-2">
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="w-5/6 mt-5 mb-4">
        <button
          type="submit"
          disabled={pending}
          className="w-full p-4 bg-blue-300 mt-5 rounded-md font-bold hover:bg-green-600 hover:text-white transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </div>
    </form>
  );
}