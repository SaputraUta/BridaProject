import NavUser from "@/components/component-customer/NavUser";
import ReservationStep from "@/components/component-customer/ReservationStep";
import SearchBar from "@/components/component-customer/SearchBar";
import LayoutCustomer from "@/layout/layout-customer";
import dynamic from "next/dynamic";

const DynamicPopularSearch = dynamic(
  () => import("@/components/component-customer/PopularSearch"),
  {
    loading: () => <p className="text-xl font-bold text-center">Loading...</p>,
    ssr: false,
  }
);

const DynamicEventNews = dynamic(
  () => import("@/components/component-customer/EventNews"),
  {
    loading: () => <p className="text-xl font-bold text-center">Loading...</p>,
    ssr: false,
  }
);

export default function index() {
  return (
    <LayoutCustomer>
      <div className="mt-28 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <h1 className="font-bold text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Find best venue for your event
        </h1>
        <NavUser />
        <SearchBar />
        <DynamicPopularSearch />
        <ReservationStep />
        <div className="mt-5"></div>
        <DynamicEventNews />
      </div>
    </LayoutCustomer>
  );
}
