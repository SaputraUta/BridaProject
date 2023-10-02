import Link from "next/link";
import React from "react";

export default function customerlogin() {
  return (
    <div>
      <h1>Customer Login</h1>
      <Link href='/customer'>Login</Link>
      <Link href='/login/sign-up/customerSignUp'>Sign up</Link>
    </div>
  );
}
