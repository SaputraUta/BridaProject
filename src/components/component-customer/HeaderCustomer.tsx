import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import LogoutModal from "./LogoutModal";

const HeaderCustomer = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <div>
      <header className="fixed top-0 max-w-2xl w-full bg-blue-950 z-10 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
        <nav className="mx-4 flex justify-between items-center py-4 sm:mx-10 md:mx-16 lg:mx-24">
          <div className="flex items-center gap-9">
            <Link href="/" className="flex justify-center items-center">
              <Image src="/logo.svg" alt="edoroli" width={28} height={45} />
            </Link>
            <h2 className="text-white font-bold text-2xl">EdoRoli</h2>
          </div>
          <div className="flex items-center gap-12 relative" ref={menuRef}>
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
                  className="p-3 text-white hover:bg-co border-b"
                >
                  Profiles
                </Link>
                <Link
                  href="/customer/profiles/riwayat"
                  className="p-3 text-white hover:bg-co border-b"
                >
                  Riwayat Reservasi
                </Link>
                <p
                  onClick={() => setLogout(true)}
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
