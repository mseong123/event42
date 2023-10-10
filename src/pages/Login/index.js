import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => signIn('fortytwo',{ callbackUrl: 'http://google.com' })}>Login with 42</button>
    </div>
  )
}
