import NavUser from "@/components/component-customer/NavUser";
import LayoutCustomer from "@/layout/layout-customer";

export default function riwayat() {
  return (
    <LayoutCustomer>
      <div className="mx-24 mt-32">
        <NavUser />
        <div className="mt-5 border-t-2 shadow-md rounded-xl">
          <div className="p-5">
            <h4 className="font-medium text-lg">Riwayat reservasi</h4>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p
                    className="font-semibold text-base text-to
                "
                  >
                    Kamis 12 Desember 2023
                  </p>
                  <p className="text-base">Taman Sangkareang</p>
                </div>
                <button
                  className="font-semibold text-base text-to
                "
                >
                  Lihat invoice
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p
                    className="font-semibold text-base text-to
                "
                  >
                    Selasa 16 Maret 2023
                  </p>
                  <p className="text-base">Taman Sangkareang</p>
                </div>
                <button
                  className="font-semibold text-base text-to
                "
                >
                  Lihat invoice
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p
                    className="font-semibold text-base text-to
                "
                  >
                    Rabu 09 Agustus 2023
                  </p>
                  <p className="text-base">Taman Sangkareang</p>
                </div>
                <button
                  className="font-semibold text-base text-to
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
