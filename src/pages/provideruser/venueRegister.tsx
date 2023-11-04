import NavProvider from "@/components/component-provider/NavProvider";
import RegisterVenue from "@/components/component-provider/RegisterVenue";
import LayoutProvider from "@/layout/layout-provider";

export default function VenueRegister() {
  return (
    <LayoutProvider>
      <NavProvider />
      <div className="mx-[100px] max-width-[1080px] mt-10">
        <h2 className="font-bold text-3xl">Venue Register</h2>
        <RegisterVenue/>
      </div>
    </LayoutProvider>
  );
}
