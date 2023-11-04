import Image from "next/image";
import Link from "next/link";

type Venue = {
  venue_id: number;
  nama: string;
  gambar: string;
  Penanggung_jawab: string;
};

const VenueCart = ({ venue_id, nama, gambar, Penanggung_jawab }: Venue) => {
  return (
    <Link href={"/provideruser/"+venue_id} className="p-3 rounded-md hover:cursor-pointer hover:scale-105 border-2">
      <div className="flex flex-col justify-center items-center">
        <Image src={gambar} alt="venue" width={301} height={284} />
      </div>
      <div className="mt-3">
        <div className="flex">
          <Image src="/stars.svg" alt="star" width={20} height={20} />
          <Image src="/stars.svg" alt="star" width={20} height={20} />
          <Image src="/stars.svg" alt="star" width={20} height={20} />
          <Image src="/stars.svg" alt="star" width={20} height={20} />
          <Image src="/stars.svg" alt="star" width={20} height={20} />
        </div>
        <h3 className="font-bold text-xl mt-2">{nama}</h3>
        <div className="flex gap-1">
          <Image src="/contactperson.svg" alt="contact" width={20} height={20} />
          <p>{Penanggung_jawab}</p>
        </div>
      </div>
    </Link>
  );
};

export default VenueCart;
