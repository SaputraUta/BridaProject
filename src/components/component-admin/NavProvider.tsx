import Link from "next/link";

const NavProvider = () => {
  return (
    <div className="w-full">
      <nav className="mx-[100px] flex gap-8 mt-12 max-w-[1440px]">
        <Link href="/provideruser">
          <p className="text-xl hover:text-blue-950 hover:underline">
            All Stay
          </p>
        </Link>
        <Link href="/provideruser/myVenue">
          <p className="text-xl hover:text-blue-950 hover:underline">My Venue</p>
        </Link>
        <Link href="/provideruser/venueRegister">
          <p className="text-xl hover:text-blue-950 hover:underline">Venue Register</p>
        </Link>
        <Link href="/provideruser/bookingConfirmation">
          <p className="text-xl hover:text-blue-950 hover:underline">Booking Confirmation</p>
        </Link>
      </nav>
    </div>
  );
};

export default NavProvider;
