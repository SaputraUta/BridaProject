import Link from "next/link";
import React from "react";

const NavUser = () => {
  return (
    <div className="border-b-2 pb-5">
      <nav className="flex gap-8 mt-12">
        <Link href="/customer">
          <p className="text-xl hover:text-blue-950 text-to hover:underline">All Stay</p>
        </Link>
        <Link href="/customer/venue">
          <p className="text-xl hover:text-blue-950 text-to hover:underline">Venue</p>
        </Link>
        <Link href="/customer/eventlist">
          <p className="text-xl hover:text-blue-950 text-to hover:underline">Event</p>
        </Link>
      </nav>
    </div>
  );
};

export default NavUser;
