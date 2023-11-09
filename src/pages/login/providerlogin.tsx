import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function userSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-signin">
      <div className="w-11/12 bg-white flex justify-between">
        <div className="flex flex-col items-center justify-center p-5 w-[35%]">
          <h1 className="font-bold text-4xl m-4">Sign Up</h1>
          <p className="mb-4 text-center px-8">
            Silahkan daftarkan akun anda terlebih dahulu sebelum menggunakan
            fitur-fitur kami.
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-5/6 border-b overflow-hidden mb-5 bg-transparent focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-5/6 border-b overflow-hidden mb-5 bg-transparent focus:outline-none"
          />
          <Link href='/provideruser' className="bg-black p-3 text-white w-5/6 text-center rounded-xl m-2 hover:scale-105 hover:cursor-pointer">
            Login
          </Link>
          <Link
            href="/auth/sign-up/providerSignUp"
            className="bg-krim p-3 text-black w-5/6 hover:scale-105 text-center rounded-xl mb-2 hover:cursor-pointer border-black border-2 m-2"
          >
            Sign up
          </Link>
        </div>
        <div className="w-[65%] flex justify-center">
          <Image
            src="/usersignup-illustration.svg"
            alt="signin"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
