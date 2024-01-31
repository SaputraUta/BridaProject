import Link from "next/link";

const NavProvider = () => {
  return (
    <div className="border-b-2 pb-3 lg:pb-5">
      <nav className="flex gap-6 sm:gap-8 mt-2">
        <Link href="/provideruser">
          <p className="text-sm sm:text-base md:text-xl hover:text-blue-950 text-to hover:underline">
            All Stay
          </p>
        </Link>
        <Link href="/provideruser/venueRegister">
          <p className="text-sm sm:text-base md:text-xl hover:text-blue-950 text-to hover:underline">
            Venue
          </p>
        </Link>
        <Link href="/provideruser/bookingConfirmation">
          <p className="text-sm sm:text-base md:text-xl hover:text-blue-950 text-to hover:underline">
            Booking List
          </p>
        </Link>
      </nav>
    </div>
  );
};

export default NavProvider;
