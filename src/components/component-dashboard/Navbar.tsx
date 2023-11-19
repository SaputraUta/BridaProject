import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const onOpenMenu = () => {
    setMenu(!menu);
  };
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
    <header className="fixed top-0 max-w-2xl w-full bg-blue-950 z-10 sm:max-w-3xl md:max-w-5xl lg:max-w-7xl">
      <nav className="mx-4 flex justify-between items-center py-4 sm:mx-10 md:mx-16 lg:mx-24">
        <Link href="/" className="flex items-center gap-4">
          <img src="/logo.svg" alt="edoroli" className="w-10 h-10 sm:h-16" />
          <h2 className="text-white font-bold text-xl sm:text-2xl sm:tracking-wider">EdoRoli</h2>
        </Link>
        <div ref={menuRef} className="flex items-center relative">
          <img
            src="/menu.svg"
            alt=""
            className="block w-8 hover:cursor-pointer md:hidden"
            onClick={onOpenMenu}
          />
          {menu ? (
            <div className="absolute top-8 -left-28 flex flex-col bg-co2 w-36 h-36 gap-2 rounded-xl justify-center items-center">
              <Link
                href="/"
                className="text-white hover:bg-co p-2 border-b w-full text-center rounded-xl"
              >
                Home
              </Link>
              <Link
                href="/AboutUs"
                className="text-white hover:bg-co p-2 border-b w-full text-center rounded-xl"
              >
                About Us
              </Link>
              <Link
                href="/ContactUs"
                className="text-white hover:bg-co p-2 w-full text-center rounded-xl"
              >
                Contact Us
              </Link>
            </div>
          ) : null}
        </div>
        <div className="hidden md:flex items-center gap-5">
          <Link href="/" className="text-white lg:text-lg hover:text-to">
            Home
          </Link>
          <Link href="/AboutUs" className="text-white lg:text-lg hover:text-to">
            About Us
          </Link>
          <Link href="/ContactUs" className="text-white lg:text-lg hover:text-to">
            Contact Us
          </Link>
          <Link href="/login">
            <CustomButton
              title="Get Started"
              containerStyles="bg-co text-white md:text-base font-medium rounded-xl px-6 py-2 hover:bg-co2"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
