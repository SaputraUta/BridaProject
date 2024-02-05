import Link from "next/link";

type Props = {
  venue_id: number;
  imageUrl: string;
  nama: string;
  kota: string;
};

const Venue = ({venue_id, imageUrl, nama, kota }: Props) => {
  const basePath = "/home/saputra/edoroli/BridaProject/public";
  const relativePath = imageUrl.replace(basePath, "");
  return (
    <Link
      href={"/customer/venue/" + venue_id}
      className="rounded-md hover:cursor-pointer hover:scale-105 border-2 max-w-[200px] sm:max-w-none"
    >
      <div className="flex flex-col justify-center items-center p-1">
        <img src={relativePath} alt="venue" className="w-full" />
      </div>
      <div className="flex flex-col px-2 pb-2">
        <div className="flex">
          <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
          <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
          <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
          <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
          <img src="/stars.svg" alt="star" className="w-4 sm:w-6" />
        </div>
        <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl overflow-hidden text-ellipsis whitespace-nowrap">{nama}</h3>
        <div className="flex gap-1 items-center">
          <img
            src="/location.svg"
            alt="location"
            className="w-4 sm:w-6 lg:w-8"
          />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg overflow-hidden text-ellipsis whitespace-nowrap">{kota}</p>
        </div>
      </div>
    </Link>
  );
};

export default Venue;
