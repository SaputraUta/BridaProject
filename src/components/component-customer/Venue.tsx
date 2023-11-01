import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  venue_id: number;
  imageUrl: string;
  nama: string;
  kota: string;
};

const Venue = ({ id, venue_id, imageUrl, nama, kota }: Props) => {
  return (
    <Link
      href={"/customer/venue/" + id + "/" + venue_id}
      className="p-3 rounded-md hover:cursor-pointer hover:scale-105 border-2"
    >
      <div className="flex flex-col justify-center items-center">
        <Image src={imageUrl} alt="venue" width={301} height={284} />
      </div>
      <div className="mt-3">
        <div className="flex">
          <Image src="/stars.svg" alt="star" width={20} height={20} />
          <Image src="/stars.svg" alt="star" width={20} height={20} />
          <Image src="/stars.svg" alt="star" width={20} height={20} />
          <Image src="/stars.svg" alt="star" width={20} height={20} />
          <Image src="/stars.svg" alt="star" width={20} height={20} />
        </div>
        <h3 className="font-bold text-xl">{nama}</h3>
        <div className="flex gap-1">
          <Image
            src="/location.svg"
            alt="location"
            width={20}
            height={20}
          ></Image>
          <p>{kota}</p>
        </div>
      </div>
    </Link>
  );
};

export default Venue;
