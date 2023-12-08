/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import InputLogin from "@/components/component-customer/InputLogin";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import axios from "axios";

export default function providerSignUp() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    formDataJSON.role = "Provider";
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        formDataJSON
      );
      console.log(response.data);
      router.push("/login/providerlogin");
    } catch (error) {
      console.error("Error while posting data:", error);
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
         <div className="w-11/12 max-w-xs sm:max-w-xl md:w-5/6 m-2 flex flex-col items-center"> 
            <div className="flex items-center justify-between my-2 gap-2">
              <label
                htmlFor="checked-checkbox"
                className="font-medium text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                Menyetujui ketentuan layanan EdoRoli
              </label>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-xs sm:text-sm md:text-base lg:text-lg"
              />
            </div>
            <button className="bg-black p-3 text-white w-11/12 max-w-xs sm:max-w-xl md:w-5/6 text-center rounded-xl hover:scale-105 hover:cursor-pointer mb-1 text-xs sm:text-sm md:text-base lg:text-lg">
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
