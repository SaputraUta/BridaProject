import Link from "next/link";

type Venue = {
  venue_id: number;
  nama: string;
  gambar: string;
  Penanggung_jawab: string;
  kota: string,
};

const VenueCart = ({ venue_id, nama, gambar, Penanggung_jawab, kota }: Venue) => {
  return (
    <Link
      href={"/provideruser/venuedetail/" + venue_id}
      className="rounded-md hover:cursor-pointer hover:scale-105 border-2"
    >
      <div className="flex flex-col justify-center items-center p-1">
        <img src={gambar} alt="venue" className="w-full" />
      </div>
      <div className="flex flex-col px-2 pb-2">
        <div className="flex">
        <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
        <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
        <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
        <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
        <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
        </div>
        <h3 className="font-bold text-sm sm:text-base md:text-lg overflow-hidden text-ellipsis whitespace-nowrap">
          {nama}
        </h3>
        <div className="flex gap-1 items-center">
          <img
            src="/location.svg"
            alt="location"
            className="w-4 sm:w-6"
          />
          <p className="text-xs sm:text-sm md:text-base overflow-hidden text-ellipsis whitespace-nowrap">{kota}</p>
        </div>
      </div>
    </Link>
  );
};

export default VenueCart;
