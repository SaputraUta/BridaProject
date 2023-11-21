import EventNews from "@/components/component-customer/EventNews";
import NavUser from "@/components/component-customer/NavUser";
import PopularSearch from "@/components/component-customer/PopularSearch";
import ReservationStep from "@/components/component-customer/ReservationStep";
import SearchBar from "@/components/component-customer/SearchBar";
import LayoutCustomer from "@/layout/layout-customer";
import Image from "next/image";

export default function index() {
  return (
    <LayoutCustomer>
      <div className="mt-28 mx-5 sm:mt-32 md:mt-36 lg:mt-40 sm:mx-10 md:mx-16 lg:mx-24">
        <h1 className="font-bold text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Temukan venue terbaik untuk event anda
        </h1>
        <NavUser />
        <SearchBar />
        <PopularSearch />
        <ReservationStep />
        <div className="mt-5"></div>
        <EventNews />
      </div>
    </LayoutCustomer>
  );
}
