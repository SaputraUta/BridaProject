import Image from "next/image";
import React from "react";

interface Props {
  kota: string;
  nama: string;
  gambar: string;
}

const Venue = ({ kota, nama, gambar }: Props) => {
  return (
    <div className="border border-gray-300 p-3 rounded-md">
      <div className="flex flex-col justify-center items-center">
        <Image src={gambar} alt="venue" width={301} height={284} />
      </div>
      <div>
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
    </div>
  );
};

export default Venue;
