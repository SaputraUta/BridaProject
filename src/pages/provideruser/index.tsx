import LayoutProvider from "@/layout/layout-provider";
import Link from "next/link";
import NavProvider from "@/components/component-provider/NavProvider";
import VenueList from "@/components/component-provider/VenueList";

export default function index() {
  return (
    <LayoutProvider>
      <div className="mx-24 mt-36">
        <NavProvider />
        <VenueList />
      </div>
    </LayoutProvider>
  );
}
