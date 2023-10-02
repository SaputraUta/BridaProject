import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link href="/">Home</Link>
      <Link href="about-us">About Us</Link>
      <Link href='/login'>Get Started</Link>
    </div>
  );
}
