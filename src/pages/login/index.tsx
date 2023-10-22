import CustomButton from "@/components/component-dashboard/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ChooseYourRole() {
  return (
    <div className="flex flex-col mt-3 items-center max-w-[1440px] gap-[20px] mb-3">
      <div>
        <h1 className="text-4xl font-bold text-center">Choose Your Role</h1>
      </div>
      <div className="flex max-h-56 justify-stretch gap-2 border-4 border-blue-950 rounded-md">
        <div className="p-3">
          <Image
            src="/user-illustration.svg"
            alt="user"
            width={250}
            height={250}
            className="m-2"
          />
        </div>
        <div className="flex flex-col max-w-[847px] h-52 p-3 justify-between m-3">
          <p className="text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text.
          </p>
          <Link href="/login/customerlogin" className="self-end">
            <CustomButton
              title="I am Customer"
              containerStyles="bg-blue-950 text-white rounded-full px-5 py-2 text-sm hover:bg-blue-900"
            />
          </Link>
        </div>
      </div>
      <div className="flex max-w-[1240px] max-h-[247px] justify-stretch gap-2 border-4 border-bo rounded-md">
        <div className="p-3">
          <Image
            src="/provider-illustration.svg"
            alt="provider"
            width={250}
            height={250}
            className="m-2"
          />
        </div>
        <div className="flex flex-col max-w-[847px] h-52 p-3 justify-between m-3">
          <p className="text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text.
          </p>
          <Link href="/login/providerlogin" className="self-end">
            <CustomButton
              title="I am Provider"
              containerStyles="bg-blue-950 text-white rounded-full px-5 py-2 text-sm hover:bg-blue-900"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
