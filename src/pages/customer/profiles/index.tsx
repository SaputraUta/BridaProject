import NavUser from "@/components/component-customer/NavUser";
import LayoutCustomer from "@/layout/layout-customer";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/router";

interface User {
  id: number;
  email: string;
  username: string;
  role: string;
}

export default function Index() {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/me");
        setUser(response.data.user);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        if (error.response.status === 401) {
          console.error("Unauthorized");
          router.push("/login/providerlogin");
        }
      }
    };
    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center gap-1 items-center">
        <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full border-t-2 border-r-2 border-slate-900 animate-spin" />
        <p className="text-sm sm:text-base text-slate-900">
          Loading user data...
        </p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <UserContext.Provider value={user}>
      <LayoutCustomer>
        <div className="mt-28 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
          <NavUser />
          <div className="mt-5 border-t-2 shadow-md rounded-xl">
            <div className="p-5">
              <div className="flex justify-between">
                <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                  Profile
                </h4>
                <button
                  type="button"
                  className="font-medium text-xs sm:text-sm md:text-base lg:text-lg text-red-600"
                >
                  Edit
                </button>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <div>
                  <Image
                    src="/userlogo.svg"
                    alt="user"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-gray-600
                "
                  >
                    Username
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {user.username}
                  </p>
                </div>
                <div>
                  <p
                    className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-gray-600
                "
                  >
                    Email
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {user.email}
                  </p>
                </div>
                {/* <div>
                  <p
                    className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-gray-600
                "
                  >
                    Password
                  </p>
                  <div className="flex gap-5 items-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </LayoutCustomer>
    </UserContext.Provider>
  );
}
