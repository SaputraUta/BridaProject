import Image from "next/image";
import React from "react";

interface Props {
  kota: string;
  nama: string;
  gambar: string;
}

const PopularVenue = ({ kota, nama, gambar }: Props) => {
  return (
    <div className="flex flex-col justify-between border border-gray-300 p-3 rounded-md h-full">
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
    </div>
  );
};

export default PopularVenue;
