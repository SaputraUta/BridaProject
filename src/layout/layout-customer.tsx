import React, { ReactNode } from "react";
import HeaderCustomer from "@/components/component-customer/HeaderCustomer";
import Footer from "@/components/component-dashboard/Footer";
import Provider from "@/components/Provider";

type Props = {
  children: ReactNode;
};

export default function LayoutCustomer(prop: Props) {
  return (
    <Provider>
      <HeaderCustomer />
      {prop.children}
      <Footer />
    </Provider>
  );
}
