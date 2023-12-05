/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  kota: string;
  nama: string;
  gambar: string;
}

const Venue = ({ kota, nama, gambar }: Props) => {
  return (
    <Link href='/login' className="rounded-md hover:cursor-pointer hover:scale-105 border-2 max-w-[200px]">
      <div className="flex flex-col justify-center items-center p-1">
        <img src={gambar} alt="venue" className="w-full" />
      </div>
      <div className="flex flex-col px-2 pb-2">
        <h3 className="font-bold text-sm sm:text-base md:text-lg overflow-hidden text-ellipsis whitespace-nowrap">{nama}</h3>
        <div className="flex gap-1 items-center">
          <img
            src="/location.svg"
            alt="location"
          className="w-4 sm:w-4 md:w-5"
          />
          <p className="text-xs sm:text-sm md:text-base overflow-hidden text-ellipsis whitespace-nowrap">{kota}</p>
        </div>
      </div>
    </Link>
  );
};

export default Venue;
