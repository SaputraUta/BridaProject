import Link from "next/link";
import React from "react";

export default function ChooseYourRole() {
  return (
    <div>
      <h1>Choose Your Role</h1>
      <Link href="/login/customerlogin">Customer</Link>
      <Link href="/login/providerlogin">Provider</Link>
    </div>
  );
}
