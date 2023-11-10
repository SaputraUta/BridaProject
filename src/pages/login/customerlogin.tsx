import Link from "next/link";
import Image from "next/image";
import InputLogin from "@/components/component-customer/InputLogin";
import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function customerlogin() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    console.log(formDataJSON);
    router.push("/customer");
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-signin">
      <div className="w-11/12 bg-white flex justify-between">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center p-5 w-[35%]"
        >
          <h1 className="font-bold text-4xl m-4">Hallo, User</h1>
          <p className="text-center mb-4">
            Nikmati layanan reservasi mudah dan terlengkap di pulau Lombok.
          </p>
          <InputLogin type="email" placeholder="Email" name="email" />
          <InputLogin type="Password" placeholder="Password" name="password" />
          <button className="bg-black p-3 text-white w-5/6 text-center rounded-xl m-2 hover:scale-105 hover:cursor-pointer">
            Login
          </button>

          <Link
            href="/auth/sign-up/customerSignUp"
            className="bg-krim p-3 text-black w-5/6 hover:scale-105 text-center rounded-xl mb-2 hover:cursor-pointer border-black border-2 m-2"
          >
            Sign up
          </Link>
        </form>

        <div className="w-[65%] flex justify-center">
          <Image
            src="/usersignin-illustration.svg"
            alt="signin"
            width={620}
            height={620}
          />
        </div>
      </div>
    </div>
  );
}
