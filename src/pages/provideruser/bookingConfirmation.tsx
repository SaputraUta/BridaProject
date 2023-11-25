import NavProvider from "@/components/component-provider/NavProvider";
import OrderList from "@/components/component-provider/OrderList";
import LayoutProvider from "@/layout/layout-provider";

export default function BookingConfirmation() {
  return (
    <LayoutProvider>
      <div className="mt-24 mx-5 sm:mt-32 md:mt-36 lg:mt-40 sm:mx-10 md:mx-16 lg:mx-24">
      <NavProvider />
        <h2 className="font-bold text-4xl mt-5">Order List and Detail Order</h2>
        <OrderList/>
        <OrderList/>
        <OrderList/>
      </div>
    </LayoutProvider>
  );
}
