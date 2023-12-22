import CustomButton from "@/components/component-dashboard/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ChooseYourRole() {
  return (
    <div className="flex flex-col items-center sm:justify-center">
      <h1 className="text-2xl font-bold text-slate-800 text-center mt-8 sm:mt-6 sm:text-3xl md:mt-4 lg:text-4xl">
        Choose Your Role
      </h1>
      <div className="flex items-center justify-center border-4 border-blue-950 rounded-md mt-8 mx-4 max-w-md gap-1 sm:max-w-xl md:mt-4 md:max-w-2xl lg:max-w-4xl">
        <div className="w-1/2 flex items-center justify-center ml-2 sm:p-2">
          <img src="/user-illustration.svg" alt="user" className="w-full sm:w-9/12 md:w-8/ lg:w-7/12" />
        </div>
        <div className="flex flex-col p-1 justify-between w-1/2 gap-2 sm:p-2">
          <p className="text-xs text-slate-800 sm:text-sm md:text-md lg:text-lg">
            Hai, User! Kami senang melihat Anda disini. Silakan login untuk
            menemukan venue yang sempurna untuk acara Anda.
          </p>
          <Link href="/login/customerlogin" className="self-start">
            <CustomButton
              title="I am Customer"
              containerStyles="bg-blue-950 text-white rounded-xl px-2 py-1 text-xs hover:scale-105 sm:text-sm sm:px-3 md:px-4 md:py-2 md:text-md lg:text-lg"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center border-4 border-bo rounded-md mt-8  mx-4 max-w-md gap-1 sm:mt-6 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        <div className="w-1/2 flex items-center justify-center ml-2 sm:p-2">
          <img
            src="/provider-illustration.svg"
            alt="user"
            className="w-full sm:w-9/12 md:w-8/12 lg:w-7/12"
          />
        </div>
        <div className="flex flex-col p-1 justify-between w-1/2 gap-2 sm:p-2">
          <p className="text-xs text-slate-800 sm:text-sm md:text-md lg:text-lg">
            Selamat datang Provider Kami siap membantu Anda mengelola venue Anda
            dengan lebih baik.
          </p>
          <Link href="/login/providerlogin" className="self-start">
            <CustomButton
              title="I am Provider"
              containerStyles="bg-co text-white rounded-xl px-2 py-1 text-xs hover:scale-105 sm:text-sm sm:px-3 md:px-4 md:py-2 md:text-md lg:text-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
