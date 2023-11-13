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
      <div className="bg-white w-1/3 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="p-5 flex flex-col gap-4 items-center w-full justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl m-4">Your Profile</h1>
            <Image src="/userlogo.svg" alt="user" width={60} height={60} />
          </div>
          <div className="flex flex-col gap-1 w-full items-center justify-center">
            <InputLogin type="text" name="username" placeholder="Username" />
            <InputLogin type="email" name="email" placeholder="Email" />
            <InputLogin
              type="number"
              name="number"
              placeholder="Phone number"
            />
            <InputLogin
              type="password"
              name="password"
              placeholder="Password"
            />
            <InputLogin
              type="password"
              name="passwordConfirmation"
              placeholder="Password confirmation"
            />
            <div className="flex justify-between w-3/4">
              <label
                htmlFor="checked-checkbox"
                className="text-sm font-medium text-gray-900"
              >
                Menyetujui ketentuan layanan EdoRoli
              </label>
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
          <button className="bg-black p-3 text-white w-5/6 text-center rounded-xl hover:scale-105 hover:cursor-pointer">
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}
