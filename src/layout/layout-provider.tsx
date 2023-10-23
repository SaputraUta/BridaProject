import HeaderCustomer from "@/components/component-customer/HeaderCustomer";
import Footer from "@/components/component-dashboard/Footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutProvider(prop: Props) {
  return (
    <div>
      <HeaderCustomer />
      {prop.children}
      <Footer />
    </div>
  );
}
