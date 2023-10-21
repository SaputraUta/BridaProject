import React, { ReactNode } from "react";
import Navbar from "@/components/component-dashboard/Navbar";
import Footer from "@/components/component-dashboard/Footer";
import Provider from "@/components/Provider";

type Props = {
  children: ReactNode;
};

export default function Layout(prop: Props) {
  return (
    <div>
      <Navbar />
      {prop.children}
      <Footer />
    </div>
  );
}
