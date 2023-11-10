import Link from "next/link";
import Image from "next/image";
import InputLogin from "@/components/component-customer/InputLogin";
import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function userSignUp() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    console.log(formDataJSON);
    router.push("/login/customerlogin");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-signin">
      <div className="w-11/12 bg-white flex justify-between">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-5 w-[35%]"
        >
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
          <InputLogin type="text" name="username" placeholder="Username" />
          <InputLogin type="email" name="email" placeholder="Email" />
          <InputLogin type="password" name="password" placeholder="Password" />
          <button className="bg-black p-3 text-white w-5/6 text-center rounded-xl m-2 hover:scale-105 hover:cursor-pointer">
            Daftar
          </button>
        </form>
        <div className="w-[65%] flex justify-center">
          <Image
            src="/usersignup-illustration.svg"
            alt="signin"
            width={490}
            height={490}
          />
        </div>
      </div>
    </div>
  );
}
