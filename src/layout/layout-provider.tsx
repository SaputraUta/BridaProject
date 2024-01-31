import Footer from "@/components/component-dashboard/Footer";
import HeaderProvider from "@/components/component-provider/HeaderProvider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutProvider(prop: Props) {
  return (
    <div>
      <HeaderProvider />
      {prop.children}
      <Footer />
    </div>
  );
}
