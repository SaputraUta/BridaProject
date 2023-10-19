import NavUser from "@/components/component-customer/NavUser";
import PopularSearch from "@/components/component-customer/PopularSearch";
import SearchBar from "@/components/component-customer/SearchBar";
import LayoutCustomer from "@/layout/layout-customer";
import Image from "next/image";

export default function index() {
  return (
    <LayoutCustomer>
      <NavUser />
      <SearchBar />
      <PopularSearch />
      <div className="mx-[100px] mt-20 flex justify-center">
        <div className="p-1 grid grid-cols-3 gap-10 w-4/5 bg-red-50 border border-black rounded-2xl items-center justify-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="border border-black w-20 h-20 rounded-full"></div>
            <h4 className="text-lg font-bold">1. Pilih venue/event</h4>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="border border-black w-20 h-20 rounded-full"></div>
            <h4 className="text-lg font-bold">2. Mengisi identitas</h4>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="border border-black w-20 h-20 rounded-full"></div>
            <h4 className="text-lg font-bold">3. Melakukan pembayaran</h4>
          </div>
        </div>
      </div>
      <div className="mx-[100px] mt-20 grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-4xl">Event</h2>
          <Image src='/placeholderallstay.jpg' width={500} height={350} alt="event" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-4xl">Venue</h2>
          <Image src='/placeholderallstay.jpg' width={500} height={350} alt="venue" />
        </div>
      </div>
    </LayoutCustomer>
  );
}
