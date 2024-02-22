/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import InputLogin from "@/components/component-customer/InputLogin";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import Link from "next/link";

export default function userSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    formDataJSON.role = "Customer";
    try {
      const response = await axios.post(
        "https://edoroli.vercel.app/api/register",
        formDataJSON
      );
      setIsLoading(false);
      router.push("/login/customerlogin?success=true");
    } catch (error: any) {
      setIsLoading(false);
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  }

  return (
    <div className="h-screen flex justify-center items-center sm:bg-signin">
      <div className="bg-white w-full h-3/4 max-w-md sm:rounded-2xl py-2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full h-full justify-between"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl my-1">Your Profile</h1>
            <img src="/userlogo.svg" alt="user" className="w-1/2" />
          </div>
          <div className="flex flex-col w-full items-center justify-center gap-2">
            <InputLogin type="text" name="username" placeholder="Username" />
            <InputLogin type="email" name="email" placeholder="Email" />
            <InputLogin
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <p
            className={`font-semibold text-xs sm:text-sm md:text-base lg:text-lg ${
              isLoading ? "block" : "hidden"
            }`}
          >
            Registering...
          </p>

          {error && (
            <p className="font-semibold text-xs sm:text-sm md:text-base text-center text-red-500">
              {error}
            </p>
          )}
          <div className="w-11/12 max-w-xs sm:max-w-xl md:w-5/6 m-2 flex flex-col items-center">
            <div className="flex items-center justify-between my-2">
              <label
                htmlFor="checked-checkbox"
                className="font-medium text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg pr-1"
              >
                Menyetujui ketentuan layanan EdoRoli
              </label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-xs sm:text-sm md:text-base lg:text-lg"
              />
            </div>
            <button
              disabled={!isChecked}
              className={`bg-black p-3 text-white w-11/12 max-w-xs sm:max-w-xl md:w-5/6 text-center rounded-xl hover:scale-105 hover:cursor-pointer mb-1 text-xs sm:text-sm md:text-base lg:text-lg ${
                isChecked ? "opacity-100" : "opacity-50"
              }`}
            >
              Daftar
            </button>
            <p className="text-center text-gray-900">
              Already have an account?{" "}
              <Link href="/login/customerlogin" className="underline">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
