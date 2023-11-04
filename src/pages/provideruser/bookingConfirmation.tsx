import NavProvider from "@/components/component-provider/NavProvider";
import OrderList from "@/components/component-provider/OrderList";
import LayoutProvider from "@/layout/layout-provider";

export default function BookingConfirmation() {
  return (
    <LayoutProvider>
      <NavProvider />
      <div className="mx-[100px] max-width-[1080px] mt-10">
        <h2 className="font-bold text-4xl">Order List and Detail Order</h2>
        <OrderList/>
        <OrderList/>
        <OrderList/>
      </div>
    </LayoutProvider>
  );
}
