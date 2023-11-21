import Image from "next/image";
import InputLogin from "@/components/component-customer/InputLogin";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function providerSignUp() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    console.log(formDataJSON);
    router.push("/login/providerlogin");
  };
  return (
    <div className="h-screen flex justify-center sm:bg-signin">
      <div className="bg-white w-full max-w-md sm:rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl my-1">Your Profile</h1>
            <Image src="/userlogo.svg" alt="user" width={60} height={60} />
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <InputLogin type="text" name="venuename" placeholder="Venue name" />
            <InputLogin type="text" name="ownername" placeholder="Owner name" />
            <InputLogin type="text" name="address" placeholder="Address" />
            <InputLogin
              type="password"
              name="password"
              placeholder="Password"
            />
            <InputLogin
              type="text"
              name="venuedetail"
              placeholder="Venue detail"
            />
            <InputLogin type="text" name="gmapslink" placeholder="Gmaps Link" />
            <div className="flex items-center justify-between w-11/12 max-w-xs sm:max-w-xl md:w-5/6">
              <label
                htmlFor="photo"
                className="w-11/12 max-w-xs sm:max-w-xl md:w-5/6 text-xs sm:text-sm md:text-base lg:text-lg"
              >
                Your venue picture
              </label>
              <div className="relative w-11/12 max-w-xs sm:max-w-xl md:w-5/6 mb-2">
                <input
                  type="file"
                  name="photo"
                  className="w-full h-full opacity-0 absolute"
                />
                <div className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-1 rounded text-xs text-center sm:text-sm md:text-base lg:text-lg">
                  Choose File
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-11/12 max-w-xs sm:max-w-xl md:w-5/6 m-2">
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
          </div>
          <button className="bg-black p-3 text-white w-11/12 max-w-xs sm:max-w-xl md:w-5/6 text-center rounded-xl hover:scale-105 hover:cursor-pointer mb-1 text-xs sm:text-sm md:text-base lg:text-lg">
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}
