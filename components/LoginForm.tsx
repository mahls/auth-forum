import { useSession, signIn, signOut } from "next-auth/react"
import {Nav} from './Nav.tsx'
import React from 'react'

export const LoginForm = () => {

  let btnStyle = 'bg-transparent border w-full border-orange-400 rounded px-5 hover:bg-stone-800 transition'
  
  return (
    <>
      <Nav/>
      <div className='border border-emerald-400 mx-5 py-20 flex justify-center rounded bg-stone-900 text-white border'>
        <div className='flex flex-col'>
          <div className="mb-2">
            <p>Login with Github</p>
          </div>
          <div>  
            <button className={btnStyle} onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      </div>
      </>
  )

}
