import LayoutCustomer from "@/layout/layout-customer";
import NavUser from "@/components/component-customer/NavUser";
import EventList from "@/components/component-customer/EventList";

const index = () => {
  return (
    <LayoutCustomer>
      <div className="mt-28 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavUser />
        <EventList />
      </div>
    </LayoutCustomer>
  );
};

export default index;
