import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

export const BlogNav = () => {

  const { data: session } = useSession()
  
  let signoutBtn = 'bg-emerald-500 rounded px-5'

  return (
    <div className='flex justify-between px-5 py-5 text-white'>
      <div className="font-bold">
        {session.user.name}
      </div>
      <div className='flex'>
        <img className="h-6 w-6 rounded mr-2" src={session.user.image}/>
        <button className={signoutBtn} onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  )
}
