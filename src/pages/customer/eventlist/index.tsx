import LayoutCustomer from "@/layout/layout-customer";
import NavUser from "@/components/component-customer/NavUser";
import EventList from "@/components/component-customer/EventList";

const index = () => {
  return (
    <LayoutCustomer>
      <div className="mx-24 mt-32">
        <NavUser />
        <EventList />
      </div>
    </LayoutCustomer>
  );
};

export default index;
