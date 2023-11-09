import NavProvider from "@/components/component-provider/NavProvider";
import RegisterVenue from "@/components/component-provider/RegisterVenue";
import LayoutProvider from "@/layout/layout-provider";

export default function VenueRegister() {
  return (
    <LayoutProvider>
      <NavProvider />
      <div className="mx-24 mt-20">
        <h2 className="font-bold text-3xl">Venue Register</h2>
        <RegisterVenue />
      </div>
    </LayoutProvider>
  );
}
