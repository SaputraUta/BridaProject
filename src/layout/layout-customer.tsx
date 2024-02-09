import React, { ReactNode } from "react";
import HeaderCustomer from "@/components/component-customer/HeaderCustomer";
import Footer from "@/components/component-dashboard/Footer";

type Props = {
  children: ReactNode;
};

export default function LayoutCustomer(prop: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCustomer />
      <div className="flex-grow">{prop.children}</div>
      <Footer />
    </div>
  );
}
