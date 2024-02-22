import LayoutProvider from "@/layout/layout-provider";
import NavProvider from "@/components/component-provider/NavProvider";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import UserContext from "@/context/userContext";
import axios from "axios";
import { useRouter } from "next/router";

const DynamicVenueList = dynamic(
  () => import("@/components/component-provider/VenueList"),
  {
    loading: () => <p className="text-xl font-bold text-center">Loading...</p>,
    ssr: false,
  }
);

interface User {
  id: number;
  email: string;
  username: string;
  role: string;
}

export default function Index() {
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
      <LayoutProvider>
        <div className="mt-24 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
          <NavProvider />
          <DynamicVenueList />
        </div>
      </LayoutProvider>
    </UserContext.Provider>
  );
}
