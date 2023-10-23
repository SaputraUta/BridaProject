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
      <div className="mx-[100px] mt-20 flex justify-center max-w-[1140px]">
        <div className="p-10 grid grid-cols-4 w-fit bg-blue-100 border border-black rounded-full items-center justify-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src="/allstay1.png" alt="langkah1" width={80} height={80} />
            <h4 className="text-base font-bold">1. Pilih venue/event</h4>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src="/allstay2.png" alt="langkah2" width={80} height={80} />
            <h4 className="text-base font-bold">2. Mengisi identitas</h4>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src="/allstay3.png" alt="langkah3" width={80} height={80} />
            <h4 className="text-base font-bold">3. Melengkapi form SOP</h4>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image src="/allstay4.png" alt="langkah4" width={80} height={80} />
            <h4 className="text-base font-bold">4. Melakukan pembayaran</h4>
          </div>
        </div>
      </div>
      <div className="mx-[100px] mt-20 grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-4xl">Event</h2>
          <Image
            src="/placeholderallstay.jpg"
            width={500}
            height={350}
            alt="event"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-4xl">Venue</h2>
          <Image
            src="/placeholderallstay.jpg"
            width={500}
            height={350}
            alt="venue"
          />
        </div>
      </div>
    </LayoutCustomer>
  );
}
