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
        <img src={imageUrl} alt="venue" />
      </div>
      <div className="mt-3">
        <div className="flex">
          <img src="/stars.svg" alt="star"  />
          <img src="/stars.svg" alt="star"  />
          <img src="/stars.svg" alt="star"  />
          <img src="/stars.svg" alt="star"  />
          <img src="/stars.svg" alt="star" />
        </div>
        <h3 className="font-bold text-xl">{nama}</h3>
        <div className="flex gap-1">
          <img
            src="/location.svg"
            alt="location"
          />
          <p>{kota}</p>
        </div>
      </div>
    </Link>
  );
};

export default Venue;
