import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex text-white mt-[90px] bg-cr">
      <div className="flex flex-wrap justify-between gap-28 my-16 mx-24">
        <Image
          src="/footer-logo.svg"
          alt="footer-logo"
          width={193}
          height={161}
        />
        <div className="flex justify-between flex-col w-[220px] h-[180px]">
          <h3 className="text-[24px] font-bold">EdoRoli</h3>
          <p>EdoRoli adalah website resevasi terbaik di pulau Lombok.</p>
          <div className="flex justify-between">
            <Image src="/Facebook.svg" alt="facebook" width={29} height={20} />
            <Image src="/Twitter.svg" alt="twitter" width={29} height={20} />
            <Image src="/TikTok.svg" alt="TikTok" width={29} height={20} />
            <Image src="/Viber.svg" alt="viber" width={29} height={20} />
          </div>
        </div>
        <div className="flex justify-between flex-col w-[200px] h-[171px]">
          <h3 className="text-[24px] font-bold">Contact Info</h3>
          <p>
            Address : Jl. Bypass No 28, Desa Kuranji Dalang, Lombok Barat, NTB
          </p>
          <p>Phone : +62 823-4012-6503</p>
          <p>Email : edoroli@gmail.com</p>
        </div>
        <div className="flex justify-between flex-col w-[10px] h-[196px]">
          <h3 className="text-[24px] font-bold">Navigation</h3>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Venue
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Event
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
