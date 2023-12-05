/* eslint-disable react-hooks/rules-of-hooks */
import InputLogin from "@/components/component-customer/InputLogin";
import { FormEvent } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function userSignUp() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    formDataJSON.role = "Customer";
    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        formDataJSON
      );
      console.log(response.data);
      router.push("/login/customerlogin");
    } catch (error) {
      console.error("Error while posting data:", error);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center sm:bg-signin">
      <div className="bg-white w-full h-5/6 max-w-md sm:rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-col gap-4 sm:gap-2 items-center w-full justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl sm:text-3xl m-3">Your Profile</h1>
            <img src="/userlogo.svg" alt="user" className="w-1/3" />
          </div>
          <div className="flex flex-col gap-1 w-full items-center justify-center">
            <InputLogin type="text" name="username" placeholder="Username" />
            <InputLogin type="email" name="email" placeholder="Email" />
            <InputLogin
              type="password"
              name="password"
              placeholder="Password"
            />
            <InputLogin type="password" placeholder="Password confirmation" />
            <div className="flex justify-between items-center w-11/12 max-w-xs sm:max-w-xl md:w-5/6">
              <label
                htmlFor="checked-checkbox"
                className="font-medium text-xs sm:text-sm md:text-base text-slate-500"
              >
                Menyetujui ketentuan layanan EdoRoli
              </label>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
          <button className="bg-black p-3 text-white w-5/6 text-center rounded-xl hover:scale-105 hover:cursor-pointer mt-4">
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}
