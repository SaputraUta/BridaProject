import Link from 'next/link'
import React from 'react'

export default function providerlogin() {
  return (
    <div>
        <h1>providerlogin</h1>
        <Link href='/provideruser'>Login</Link>
        <Link href='/login/sign-up/providerSignUp'>Sign up</Link>
    </div>
  )
}
