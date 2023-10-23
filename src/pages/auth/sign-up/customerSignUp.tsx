import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function userSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Signing Up...");

    if (password && email) {
      const data = {
        email: email,
        password: password,
      };

      const response = await fetch("/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
      } else {
        setMessage("Error while signing up.");
      }
      setEmail("");
      setPassword("");
    } else {
      setMessage("Seluruh form harus terisi!");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-signin">
      <div className="flex w-11/12 items-center justify-center bg-monza">
        <div className="h-[540px] w-[430px] flex flex-col items-center justify-center p-5">
        <Link href='/login/customerlogin' className="underline self-start ml-3">Login</Link>
          <h1 className="font-bold text-4xl m-4">Sign Up</h1>
          <p className="text-center mb-4">
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
          <button
            className="bg-black p-3 text-white w-5/6 text-center rounded-xl m-2 hover:scale-105 hover:cursor-pointer"
            onClick={handleSubmit}
          >
            Daftar
          </button>

          <p className="text-center">{message}</p>
        </div>
        <Image src="/usersign.svg" alt="signin" width={740} height={600} />
      </div>
    </div>
  );
}
