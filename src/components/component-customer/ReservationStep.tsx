import Image from "next/image";

export default function ReservationStep() {
  return (
    <div className="mt-16">
      <h1 className="font-bold text-5xl mt-3">Tata cara reservasi venue</h1>
      <div className="p-2 grid grid-cols-2 w-fit bg-co2 border border-black rounded-xl items-center justify-center gap-5 mt-5">
        <div className="flex gap-5 bg-red-50 p-5 rounded-xl">
          <Image src="/allstay1.svg" alt="langkah1" width={150} height={150} />
          <div>
            <h4 className="text-base font-bold">1. Pilih venue/event</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem habitasse convallis
              quam tempor laoreet placerat vulputate. Aliquam.
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center bg-red-50 p-5 rounded-xl">
          <Image src="/allstay2.svg" alt="langkah2" width={150} height={150} />
          <div>
            <h4 className="text-base font-bold">2. Mengisi identitas</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem habitasse convallis
              quam tempor laoreet placerat vulputate. Aliquam.
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center bg-red-50 p-5 rounded-xl">
          <Image src="/allstay3.svg" alt="langkah3" width={150} height={150} />
          <div>
            <h4 className="text-base font-bold">3. Melengkapi form SOP</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem habitasse convallis
              quam tempor laoreet placerat vulputate. Aliquam.
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center bg-red-50 p-5 rounded-xl">
          <Image src="/allstay4.svg" alt="langkah4" width={150} height={150} />
          <div>
            <h4 className="text-base font-bold">4. Melakukan pembayaran</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem habitasse convallis
              quam tempor laoreet placerat vulputate. Aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
