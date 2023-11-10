import HeaderPages from "@/components/component-admin/HeaderPages";
import Sidebar from "@/components/component-admin/SideBar";
import EventNews from "@/components/component-customer/EventNews";
import Image from "next/image";

const manageNews = () => {
  return (
    <div className="max-width-[1180px]">
      <Sidebar />
      <div className="ml-60 mr-24">
        <div className="flex justify-between">
          <EventNews />
          <button type="button" className="hover:scale-110">
            <Image src="/add-icon.svg" alt="add" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default manageNews;
