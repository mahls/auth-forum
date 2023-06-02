import React from 'react'
import {useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
export const PostForm = () => {
  
  const { data: session } = useSession()
  const [forminput, setforminput] = useState('')

  let name = session.user.name

  let handleSubmit = async (e)=> {
    e.preventDefault()
    console.log('submitted')
    const response = await fetch("/api/addPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: name , post: forminput }),
    })

  }

  let handleFormChange = (e)=> {
    e.preventDefault()
    setforminput(e.target.value)
  };

  return (
    <div className='flex justify-center px-5 mt-5 '>
      <form onSubmit={handleSubmit} className='w-full'>
        <input  onChange={handleFormChange} placeholder='Share your thoughts...' className=' text-stone-100 px-2 py-2 w-full bg-transparent rounded border border-emerald-400' />
      </form>
    </div>
  )
}
