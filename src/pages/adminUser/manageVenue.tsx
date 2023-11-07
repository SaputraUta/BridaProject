import HeaderPages from "@/components/component-admin/HeaderPages";
import Sidebar from "@/components/component-admin/SideBar";
import VenueList from "@/components/component-admin/VenueList";

export default function ManageVenue() {
  return (
    <div className="max-width-[1180px]">
      <Sidebar />
      <div className="ml-60 mr-24 mt-3">
        <HeaderPages title="Manage Venue" />
        <VenueList/>
      </div>
    </div>
  );
}
