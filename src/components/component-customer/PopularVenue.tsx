import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  kota: string;
  nama: string;
  gambar: string;
  venue_id: number;
  id: number;
}

const PopularVenue = ({ kota, nama, gambar, venue_id, id}: Props) => {
  return (
    <Link href={`/customer/venue/${id}/${venue_id}`} className="flex flex-col justify-between border border-gray-300 p-3 rounded-md h-full hover:scale-105 hover:cursor-pointer">
      <div>
        <Image
          src={gambar}
          alt="venue"
          width={301}
          height={284}
          className="justify-center items-center"
        />
        <h3 className="font-bold text-xl">{nama}</h3>
      </div>
      <div className="flex gap-1">
        <Image src="/location.svg" alt="location" width={20} height={20} />
        <p>{kota}</p>
      </div>
    </Link>
  );
};

export default PopularVenue;
