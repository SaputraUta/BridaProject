import NavProvider from "@/components/component-provider/NavProvider";
import RegisterVenue from "@/components/component-provider/RegisterVenue";
import LayoutProvider from "@/layout/layout-provider";

export default function VenueRegister() {
  return (
    <LayoutProvider>
      <div className="mt-24 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavProvider />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-5">
          Venue Register
        </h2>
        <RegisterVenue />
      </div>
    </LayoutProvider>
  );
}
