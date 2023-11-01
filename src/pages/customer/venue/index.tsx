import LayoutCustomer from "@/layout/layout-customer"
import NavUser from "@/components/component-customer/NavUser";
import SearchBar from "@/components/component-customer/SearchBar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import VenueList from "@/components/component-customer/VenueList";
import { useSearchParams } from "next/navigation";


const index = () => {
  return (
    <LayoutCustomer>
        <NavUser/>
        <SearchBar />
        <VenueList/>
    </LayoutCustomer>
  )
}

export default index