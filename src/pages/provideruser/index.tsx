import LayoutProvider from "@/layout/layout-provider";
import Link from "next/link";
import NavProvider from "@/components/component-admin/NavProvider";
import VenueHero from "@/components/component-admin/VenueHero";
import VenueList from "@/components/component-admin/VenueList";

export default function index() {
  return (
    <LayoutProvider>
      <NavProvider/>
      <VenueHero/>
      <VenueList/>
    </LayoutProvider>
  );
}
