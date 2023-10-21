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
    }else{
      setMessage('Seluruh form harus terisi!')
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center border-red-600 rounded-xl border-2">
        <h1 className="text-red-600 font-bold text-5xl m-5">
          Customer Sign Up
        </h1>
        <Image
          src="/user-illustration.svg"
          alt="user"
          width={314}
          height={227}
          className="m-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-5/6 border-b overflow-hidden mb-5"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-5/6 border-b overflow-hidden mb-5"
        />
        <button
          className="bg-red-600 p-3 text-white w-5/6 hover:bg-red-700 text-center rounded-xl m-2"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}
