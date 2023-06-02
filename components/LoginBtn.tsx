import { useSession, signIn, signOut } from "next-auth/react"
import {LoginForm} from './LoginForm.tsx'
import {Nav} from './Nav.tsx'

export const LoginBtn = () => {
  
  const { data: session } = useSession()
  
  // BLOG COMPONENT
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <img src={session.user.image}/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  // FORM LOGIN COMPONENT
  return (
    <>
      <LoginForm/>
    </>
  )
}
