import Link from "next/link";

const NavProvider = () => {
  return (
    <div className="w-full">
      <nav className="mx-[100px] flex gap-8 mt-12 max-w-[1440px] border-b-2 pb-5">
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
    </div>
  );
};

export default NavProvider;
