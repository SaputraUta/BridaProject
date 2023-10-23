import Link from "next/link";
import React from "react";

const NavUser = () => {
  return (
    <div className="w-full">
      <nav className="mx-[100px] flex gap-8 mt-12 max-w-[1440px]">
        <Link href="/customer">
          <p className="text-xl hover:text-blue-950 hover:underline">All Stay</p>
        </Link>
        <Link href="/customer/venue">
          <p className="text-xl hover:text-blue-950 hover:underline">Venue</p>
        </Link>
        <Link href="/customer/eventlist">
          <p className="text-xl hover:text-blue-950 hover:underline">Event</p>
        </Link>
      </nav>
    </div>
  );
};

export default NavUser;
