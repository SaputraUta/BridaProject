
export default function ReservationStep() {
  return (
    <div className="mt-5">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold lg:text-3xl text-slate-900">Tata cara reservasi venue</h1>
      <div className="p-2 flex flex-col sm:grid sm:grid-cols-2 bg-co2 border border-black rounded-xl items-center justify-center gap-5 mt-5 max-w-md sm:max-w-none">
        <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 bg-red-50 p-5 rounded-xl w-full h-full">
          <img src="/allstay1.svg" alt="langkah1" className="w-3/4" />
          <div>
            <h4 className="text-sm lg:text-base font-bold">1. Pilih venue/event</h4>
            <p className="text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem habitasse convallis
              quam tempor laoreet placerat vulputate. Aliquam.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 bg-red-50 p-5 rounded-xl w-full h-full">
          <img src="/allstay2.svg" alt="langkah2" className="w-3/4" />
          <div>
            <h4 className="text-sm lg:text-base font-bold">2. Mengisi identitas</h4>
            <p className="text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem habitasse convallis
              quam tempor laoreet placerat vulputate. Aliquam.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 bg-red-50 p-5 rounded-xl w-full h-full">
          <img src="/allstay3.svg" alt="langkah3" className="w-3/4" />
          <div>
            <h4 className="text-sm lg:text-base font-bold">3. Melengkapi form SOP</h4>
            <p className="text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem habitasse convallis
              quam tempor laoreet placerat vulputate. Aliquam.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5 bg-red-50 p-5 rounded-xl w-full h-full">
          <img src="/allstay4.svg" alt="langkah4" className="w-3/4" />
          <div>
            <h4 className="text-sm lg:text-base font-bold">4. Melakukan pembayaran</h4>
            <p className="text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem habitasse convallis
              quam tempor laoreet placerat vulputate. Aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
