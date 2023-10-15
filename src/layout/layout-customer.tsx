import React, { ReactNode } from "react";
import HeaderCustomer from "@/components/component-customer/HeaderCustomer";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
};

export default function LayoutCustomer(prop: Props) {
  return (
    <div>
      <HeaderCustomer />
      {prop.children}
      <Footer />
    </div>
  );
}
