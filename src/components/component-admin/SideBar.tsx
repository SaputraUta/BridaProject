import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-blue-950 text-white h-screen w-48 fixed top-0 left-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin</h1>
      </div>
      <ul className="p-2 flex flex-col gap-1">
        <Link href="/adminUser" className="p-2 hover:bg-co hover:rounded-xl">
          User
        </Link>
        <Link
          href="/adminUser/manageVenue"
          className="p-2 hover:bg-co hover:rounded-xl"
        >
          Venue
        </Link>
        <Link
          href="/adminUser/manageEvent"
          className="p-2 hover:bg-co hover:rounded-xl"
        >
          Event
        </Link>
        <Link
          href="/adminUser/manageNews"
          className="p-2 hover:bg-co hover:rounded-xl"
        > 
          News
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
