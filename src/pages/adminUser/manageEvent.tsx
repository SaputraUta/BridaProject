import EventList from "@/components/component-admin/EventList";
import HeaderPages from "@/components/component-admin/HeaderPages";
import Sidebar from "@/components/component-admin/SideBar";
import Image from "next/image";

export default function ManageEvent() {
  return (
    <div className="max-width-[1180px]">
      <Sidebar />
      <div className="ml-60 mr-24 mt-3">
        <div className="flex justify-between">
          <HeaderPages title="Manage Event" />
          <button type="button" className="hover:scale-110">
            <Image src="/add-icon.svg" alt="add" width={30} height={30} />
          </button>
        </div>
        <EventList />
      </div>
    </div>
  );
}
