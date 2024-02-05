import Footer from "@/components/component-dashboard/Footer";
import HeaderProvider from "@/components/component-provider/HeaderProvider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutProvider(prop: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderProvider />
      <div className="flex-grow">{prop.children}</div>
      <Footer />
    </div>
  );
}
