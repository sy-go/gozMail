'use client'

import { State, registerUser } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function CreateUserForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(registerUser, initialState);

  return (
    <form action={formAction} className=' p-8 bg-slate-400  rounded-md '>
      <div className="mb-2 text-center text-white text-xl">User Registration</div>
      <input 
        className=' rounded-md m-2 p-2 w-60 bg-slate-50 text-center'
        type='text'
        placeholder='choose your user name'
        name='userEmailName'
        aria-describedby="userEmailName-error"
        required
      />
      <div id="userEmailName-error" aria-live="polite" aria-atomic="true">
        {state.errors?.userName &&
          state.errors.userName.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <input
        className=' rounded-md p-2 m-2 w-60 bg-slate-50 text-center'
        type='password'
        placeholder='select password'
        name='userPassword'
        aria-describedby="password-error"
        required
      />
      <div id="password-error" aria-live="polite" aria-atomic="true">
        {state.errors?.userPassword &&
          state.errors.userPassword.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <button 
        className=' rounded-md p-2 m-2 w-60 bg-blue-100'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
}
