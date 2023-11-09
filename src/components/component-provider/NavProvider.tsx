import Link from "next/link";

const NavProvider = () => {
  return (
    <nav className="flex gap-8 max-w-[1440px] border-b-2 pb-5">
      <Link href="/provideruser">
        <p className="text-xl text-to hover:text-blue-950 hover:underline">
          All Stay
        </p>
      </Link>
      <Link href="/provideruser/venueRegister">
        <p className="text-xl text-to hover:text-blue-950 hover:underline">
          Venue Register
        </p>
      </Link>
      <Link href="/provideruser/bookingConfirmation">
        <p className="text-xl text-to hover:text-blue-950 hover:underline">
          Booking Confirmation
        </p>
      </Link>
    </nav>
  );
};

export default NavProvider;
