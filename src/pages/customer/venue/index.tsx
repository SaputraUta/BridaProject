import LayoutCustomer from "@/layout/layout-customer";
import NavUser from "@/components/component-customer/NavUser";
import SearchBar from "@/components/component-customer/SearchBar";
import dynamic from "next/dynamic";

const DynamicVenueList = dynamic(
  () => import("@/components/component-customer/VenueList"),
  {
    loading: () => <p className="text-xl font-bold text-center">Loading...</p>,
    ssr: false,
  }
);

const index = () => {
  return (
    <LayoutCustomer>
      <div className="mt-28 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavUser />
        <SearchBar />
        <h1 className="font-bold mt-5 text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Choose your venue
        </h1>
        <DynamicVenueList />
      </div>
    </LayoutCustomer>
  );
};

export default index;
