import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

const HeaderCustomer = () => {
  const [menu, setMenu] = useState(false);
  const [logout, setLogout] = useState(false);
  return (
    <div>
      <header className="fixed top-0 w-full max-w-7xl z-10 bg-blue-950">
        <nav className="mx-24 flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-9">
            <Link href="/" className="flex justify-center items-center">
              <Image src="/logo.svg" alt="edoroli" width={28} height={45} />
            </Link>
            <h2 className="text-white font-bold text-2xl">EdoRoli</h2>
          </div>
          <div className="flex items-center gap-12 relative">
            <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full">
              <img
                onClick={() => setMenu(!menu)}
                src="/userlogo.svg"
                alt="user"
                width="60px"
                height="60px"
                className="rounded-full hover:cursor-pointer"
              />
            </div>
            {menu && (
              <div className="absolute flex flex-col gap-2 top-16 -left-20 bg-co2 rounded w-52">
                <Link
                  href="/customer/profiles"
                  className="p-3 text-white hover:bg-co"
                >
                  Profiles
                </Link>
                <Link
                  href="/customer/profiles/riwayat"
                  className="p-3 text-white hover:bg-co"
                >
                  Riwayat Reservasi
                </Link>
                <p
                  onClick={()=>setLogout(true)}
                  className="p-3 text-white hover:bg-co"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </nav>
      </header>
      <LogoutModal isOpen={logout} onClose={() => setLogout(false)} />
    </div>
  );
};

export default HeaderCustomer;
