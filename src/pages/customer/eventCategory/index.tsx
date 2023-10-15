import LayoutCustomer from "@/layout/layout-customer";
import NavUser from "@/components/component-customer/NavUser";
import LandingHero from "@/components/LandingHero";
import EventList from "@/components/component-customer/EventList";

const index = () => {
  return (
    <LayoutCustomer>
      <NavUser />
      <EventList />   
    </LayoutCustomer>
  );
};

export default index;
