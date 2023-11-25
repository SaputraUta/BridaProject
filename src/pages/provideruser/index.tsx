import LayoutProvider from "@/layout/layout-provider";
import Link from "next/link";
import NavProvider from "@/components/component-provider/NavProvider";
import VenueList from "@/components/component-provider/VenueList";

export default function index() {
  return (
    <LayoutProvider>
      <div className="mt-24 mx-5 sm:mt-32 md:mt-36 lg:mt-40 sm:mx-10 md:mx-16 lg:mx-24">
        <NavProvider />
        <VenueList />
      </div>
    </LayoutProvider>
  );
}
