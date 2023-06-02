import { useSession, signIn, signOut } from "next-auth/react"
import {LoginForm} from './LoginForm.tsx'
import {Nav} from './Nav.tsx'
import {BlogNav} from './BlogNav.tsx'
import {PostForm} from './PostForm.tsx'
import {PostCard} from './PostCard.tsx'
import {useEffect, useState} from 'react'

export const Main = () => {

  const [data, setdata] = useState([])

  let getdata = async ()=> {
    let res = await fetch('/api/getPosts');
    const newdata = await res.json();
    setdata(newdata);
  };

  useEffect(() => {
     getdata()
  }, [])  
  
  const { data: session } = useSession()
  
  // BLOG COMPONENT IF SESSION 
  if (session) {
    return (
      <>
        <BlogNav/>
        <PostForm/>
        {
          data && data.map((post)=>{
            return(
              <PostCard name={post.name} text={post.content}/>
            )
          })
        }


      </>
    )
  }

  // FORM LOGIN COMPONENT IF NO SESSION
  return (
    <>
      <LoginForm/>
    </>
  )
}
