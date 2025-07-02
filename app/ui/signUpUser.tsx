'use client';

import { useActionState, useState } from 'react';
import { registerUser } from '@/app/actions/registerUser';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function SignupForm() {
  const [state, action, pending] = useActionState(registerUser, undefined)

  return (
    <form action={action}
      className="p-2 border-2 border-blue-200 rounded-2xl flex flex-col items-center justify-center">
      <div className="p-2">
        <label htmlFor="username" className="p-2">Register New User</label>
      </div>
      <div className='w-5/6'>
        <input

          className="w-full border-2 rounded-md border-blue-300 p-2 focus:bg-amber-50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="username"
          name="username"
          placeholder="Select username"
          required
        />
      </div>
      {state?.errors?.username && <p className="text-red-500 text-sm text-left">{state.errors.username}</p>}
      <div className="p-2 mt-5">
        <label htmlFor="password" className="p-2">Register Password</label>
      </div>
      <div className='w-5/6'>
        <input
          type="password"

          className="w-full border-2 rounded-md border-blue-300 p-2 focus:bg-amber-50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="password"
          name="password"
          placeholder="Select your password"
          required
        />
      </div>
      {state?.errors?.password && (
        <div className="text-red-500 w-5/6 text-sm">
          <p>Password must:</p>
          <ul className='w-full h-full'>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <div className='w-5/6  mt-5 mb-4'>
        <button
          className="w-full p-4 bg-blue-300 mt-5 rounded-md font-bold hover:bg-green-600 hover:text-white transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="submit"
          disabled={pending}
        >
          Submit
        </button>

      </div>
    </form>
  );
}