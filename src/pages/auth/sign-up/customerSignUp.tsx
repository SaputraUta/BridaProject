import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function userSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-signin">
      <div className="w-11/12 bg-white flex justify-between">
        <div className="flex flex-col items-center justify-center p-5 w-[35%]">
          <Link
            href="/login/customerlogin"
            className="underline self-start ml-3"
          >
            Login
          </Link>
          <h1 className="font-bold text-4xl m-4">Sign Up</h1>
          <p className="mb-4 text-center px-8">
            Silahkan daftarkan akun anda terlebih dahulu sebelum menggunakan
            fitur-fitur kami.
          </p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-5/6 border-b overflow-hidden mb-5 bg-transparent focus:outline-none"
          />
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
          <button className="bg-black p-3 text-white w-5/6 text-center rounded-xl m-2 hover:scale-105 hover:cursor-pointer">
            Daftar
          </button>
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
