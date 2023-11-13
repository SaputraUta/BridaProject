import NavUser from "@/components/component-customer/NavUser";
import LayoutCustomer from "@/layout/layout-customer";
import Image from "next/image";
import { useState } from "react";

export default function index() {
  const [showPassword, setShowPassword] = useState(false);
  const password = "inirahasia";
  return (
    <LayoutCustomer>
      <div className="mx-24 mt-32">
        <NavUser />
        <div className="mt-5 border-t-2 shadow-md rounded-xl">
          <div className="p-5">
            <div className="flex justify-between">
              <h4 className="font-medium text-lg">Profile</h4>
              <button
                type="button"
                className="font-medium text-lg text-red-600"
              >
                Edit
              </button>
            </div>
            <div className="flex flex-col gap-5 mt-5">
                <div>
                    <Image src='/userlogo.svg' alt="user" width={100} height={100} />
                </div>
              <div>
                <p
                  className="font-semibold text-base text-gray-600
                "
                >
                  Username
                </p>
                <p className="text-base">@Saputrauta</p>
              </div>
              <div>
                <p
                  className="font-semibold text-base text-gray-600
                "
                >
                  Nomor Telepon
                </p>
                <p className="text-base">082340767473</p>
              </div>
              <div>
                <p
                  className="font-semibold text-base text-gray-600
                "
                >
                  Email
                </p>
                <p className="text-base">082340767473</p>
              </div>
              <div>
                <p
                  className="font-semibold text-base text-gray-600
                "
                >
                  Password
                </p>
                <div className="flex gap-5 items-center">
                  <p className="text-base">
                    {showPassword ? password : password.replace(/./g, "*")}
                  </p>
                  <Image
                    onClick={() => setShowPassword(!showPassword)}
                    src="/show.svg"
                    alt="show"
                    width={20}
                    height={20}
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutCustomer>
  );
}
