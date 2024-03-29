/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import InputLogin from "@/components/component-customer/InputLogin";
import { FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

export default function customerlogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const router = useRouter();
  let isRegisterSuccess = router.query.success === "true";
  const [registerMessage, setRegisterMessage] = useState(isRegisterSuccess);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRegisterMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isRegisterSuccess]);

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setIsSuccess("");
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    try {
      const response = await axios.post(
        "https://edoroli.vercel.app/api/login",
        formDataJSON
      );
      setIsSuccess(
        "Login succes, please wait while we are redirecting you to dashboard!"
      );
      setIsLoading(false);
      router.push("/customer");
    } catch (error: any) {
      setIsLoading(false);
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  }
  return (
    <div
      className="lg:bg-signin h-screen w-full flex justify-center items-start md:items-center
    "
    >
      <div className="flex flex-col justify-between md:bg-white md:rounded-xl md:flex-row lg:w-11/12">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center justify-center p-5"
        >
          {registerMessage && (
            <p className="text-green-500 font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-center mb-5">
              User registered!
            </p>
          )}
          {isSuccess && (
            <p className="text-green-500 font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-center mb-5">
              {isSuccess}
            </p>
          )}
          {error && (
            <p className="text-red-500 font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-center mb-5">
              {error}
            </p>
          )}
          <h1 className="font-bold text-xl text-slate-800 sm:text-2xl md:text-3xl lg:text-4xl mb-2">
            Hallo, User
          </h1>
          <p className="text-center text-slate-800 text-xs sm:text-sm md:text-base lg:text-lg mb-4 lg:mb-8">
            Nikmati layanan reservasi mudah dan terlengkap di pulau Lombok.
          </p>
          <InputLogin type="email" placeholder="Email" name="email" />
          <InputLogin type="Password" placeholder="Password" name="password" />
          <p
            className={`font-semibold text-xs sm:text-sm md:text-base lg:text-lg ${
              isLoading ? "block" : "hidden"
            }`}
          >
            Logging in...
          </p>
          <button className="bg-slate-800 p-2 md:p-3 text-white font-bold w-11/12 md:w-5/6 text-center rounded-xl mb-2 mt-0 lg:mt-8 hover:scale-105 hover:cursor-pointer">
            Login
          </button>

          <Link
            href="/auth/sign-up/customerSignUp"
            className="bg-krim p-2 text-slate-800 font-bold w-11/12 md:w-5/6 hover:scale-105 text-center rounded-xl mb-2 hover:cursor-pointer border-slate-800 border-2"
          >
            Sign up
          </Link>
        </form>
        <div className="flex justify-center items-center mr-10 order-first md:order-last mt-10 md:mt-0">
          <img
            src="/usersignin-illustration.svg"
            alt="signin"
            className="w-8/12 max-w-[200px] md:max-w-md lg:max-w-3xl md:w-11/12 lg:p-2"
          />
        </div>
      </div>
    </div>
  );
}
