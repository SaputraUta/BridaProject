import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  venue_id: number;
  imageUrl: string;
  nama: string;
  nama_room: string;
  harga: number;
};

const Venue = ({ id, venue_id, imageUrl, nama, nama_room, harga }: Props) => {
  return (
    <div className="rounded-2xl border-2 border-red-600">
      <div className="flex gap-4 w-full m-3">
        <Image src={imageUrl} alt={nama} width={343} height={276} />
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-semibold text-4xl text-red-600">{nama}</h3>
          <div className="flex gap-2">
            <Image src="/stars.svg" alt="star" width={30} height={30} />
            <Image src="/stars.svg" alt="star" width={30} height={30} />
            <Image src="/stars.svg" alt="star" width={30} height={30} />
            <Image src="/stars.svg" alt="star" width={30} height={30} />
            <Image src="/stars.svg" alt="star" width={30} height={30} />
          </div>
          <div className="flex flex-col gap-3 justify-between h-full">
            <h3 className="font-bold text-2xl">Start From {harga}</h3>
            <p>Rooms: {nama_room}</p>
            <Link
              href={"/customer/venue/" + id + "/" + venue_id}
              className="hover:bg-red-700 text-white p-3 rounded-2xl self-end bg-red-600 mr-10"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
