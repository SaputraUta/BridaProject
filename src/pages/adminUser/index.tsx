import CustomerList from "@/components/component-admin/CustomerList";
import HeaderPages from "@/components/component-admin/HeaderPages";
import Sidebar from "@/components/component-admin/SideBar";

export default function index() {
  return (
    <div className="max-width-[1180px]">
      <Sidebar />
      <div className="ml-60 mr-24 mt-3">
        <HeaderPages title="Manage Customer" />
        <CustomerList/>
      </div>
    </div>
  );
}
