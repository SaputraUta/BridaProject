import Link from "next/link";

type Props = {
  event_id: number;
  imageUrl: string;
  judul: string;
  deskripsi: string;
};

const EventCart = ({ imageUrl, judul, deskripsi, event_id }: Props) => {
  return (
    <div className="rounded-lg border-2 border-black w-full">
      <div className="flex gap-2 m-3 w-full">
        <img src={imageUrl} alt={judul} className="w-2/5" />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl py-1 px-2">{judul}</h3>
          <div className="flex flex-col justify-between bg-gray-100 rounded-lg h-full mr-4">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-1">{deskripsi}</p>
            <Link href={"/customer/eventlist/" + event_id} className="hover:scale-105 text-white text-xs sm:text-sm md:text-base lg:text-lg py-1 px-2 sm:py-2 sm:px-4 rounded-lg self-end bg-blue-950 mr-1">Lihat Detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCart;
