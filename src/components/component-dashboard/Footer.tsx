import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex text-white justify-center mt-20 bg-blue-950">
      <div className="flex flex-col sm:flex-row justify-around gap-6 sm:gap-8 md:gap-10 lg:gap-28 mx-8 p-5 w-full">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              EdoRoli
            </h3>
            <p className="text-xs sm:text-sm md:text-base tracking-wider leading-5">
              EdoRoli adalah website resevasi terbaik di pulau Lombok.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Contact Info
          </h3>
          <div>
            <p className="text-xs sm:text-sm md:text-base">
              Address : Jl. Bypass No 28, Desa Kuranji Dalang, Lombok Barat, NTB
            </p>
            <p className="text-xs sm:text-sm md:text-base">
              Phone : +62 823-4012-6503
            </p>
            <p className="text-xs sm:text-sm md:text-base">
              Email : edoroli@gmail.com
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Navigation
          </h3>
          <div className="flex items-center">
            <div className="flex flex-col w-full">
              <Link
                href="/"
                className="hover:text-gray-300 text-xs sm:text-sm md:text-base"
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:text-gray-300 text-xs sm:text-sm md:text-base"
              >
                Venue
              </Link>
              <Link
                href="/"
                className="hover:text-gray-300 text-xs sm:text-sm md:text-base"
              >
                Event
              </Link>
              <Link
                href="/"
                className="hover:text-gray-300 text-xs sm:text-sm md:text-base"
              >
                Services
              </Link>
              <Link
                href="/"
                className="hover:text-gray-300 text-xs sm:text-sm md:text-base"
              >
                About
              </Link>
              <Link
                href="/"
                className="hover:text-gray-300 text-xs sm:text-sm md:text-base"
              >
                Contact
              </Link>
            </div>
            <img src="/footer-logo.svg" alt="footer-logo" className="w-24" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
