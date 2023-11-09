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
      <div className="mx-24 mt-32">
      <NavUser />
      <SearchBar />
      <PopularSearch />
      <ReservationStep/>
      <EventNews />
      </div>
    </LayoutCustomer>
  );
}
