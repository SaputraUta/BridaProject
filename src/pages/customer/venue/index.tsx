import LayoutCustomer from "@/layout/layout-customer"
import NavUser from "@/components/component-customer/NavUser";
import SearchBar from "@/components/component-customer/SearchBar";
import VenueList from "@/components/component-customer/VenueList";

const index = () => {
  return (
    <LayoutCustomer>
        <NavUser/>
        <SearchBar />
        <VenueList />
    </LayoutCustomer>
  )
}

export default index