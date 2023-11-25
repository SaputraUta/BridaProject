import LayoutProvider from "@/layout/layout-provider";
import NavProvider from "@/components/component-provider/NavProvider";
import dynamic from "next/dynamic";

const DynamicVenueList = dynamic(
  () => import("@/components/component-provider/VenueList"),
  {
    loading: () => <p className="text-xl font-bold text-center">Loading...</p>,
    ssr: false,
  }
);

export default function index() {
  return (
    <LayoutProvider>
      <div className="mt-24 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavProvider />
        <DynamicVenueList />
      </div>
    </LayoutProvider>
  );
}
