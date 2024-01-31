import NavUser from "@/components/component-customer/NavUser";
import LayoutCustomer from "@/layout/layout-customer";

export default function riwayat() {
  return (
    <LayoutCustomer>
      <div className="mt-28 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavUser />
        <div className="mt-5 border-t-2 shadow-md rounded-xl">
          <div className="p-5">
            <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">Riwayat reservasi</h4>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p
                    className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-to
                "
                  >
                    Kamis 12 Desember 2023
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">Taman Sangkareang</p>
                </div>
                <button
                  className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-to
                "
                >
                  Lihat invoice
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p
                    className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-to
                "
                  >
                    Selasa 16 Maret 2023
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">Taman Sangkareang</p>
                </div>
                <button
                  className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-to
                "
                >
                  Lihat invoice
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p
                    className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-to
                "
                  >
                    Rabu 09 Agustus 2023
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">Taman Sangkareang</p>
                </div>
                <button
                  className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-to
                "
                >
                  Lihat invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutCustomer>
  );
}
