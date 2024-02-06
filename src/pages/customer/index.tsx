import NavUser from "@/components/component-customer/NavUser";
import ReservationStep from "@/components/component-customer/ReservationStep";
import SearchBar from "@/components/component-customer/SearchBar";
import UserContext from "@/context/userContext";
import LayoutCustomer from "@/layout/layout-customer";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DynamicPopularSearch = dynamic(
  () => import("@/components/component-customer/PopularSearch"),
  {
    loading: () => (
      <p className="text-xl font-bold text-center">Loading popular venue...</p>
    ),
    ssr: false,
  }
);

const DynamicEventNews = dynamic(
  () => import("@/components/component-customer/EventNews"),
  {
    loading: () => (
      <p className="text-xl font-bold text-center">Loading event news...</p>
    ),
    ssr: false,
  }
);

interface User {
  id: number;
  email: string;
  username: string;
  role: string;
}

export default function index() {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);
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
          <h1 className="font-bold text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Hello {user.username}, find best venue for your event!
          </h1>
          <NavUser />
          <SearchBar />
          <DynamicPopularSearch />
          <ReservationStep />
          <div className="mt-5"></div>
          <DynamicEventNews />
        </div>
      </LayoutCustomer>
    </UserContext.Provider>
  );
}
