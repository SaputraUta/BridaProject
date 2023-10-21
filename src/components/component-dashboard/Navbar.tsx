import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 border-b-2 border-black">
      <nav className="max-w-[1440px] ml-[80px] mr-[72px] flex justify-between items-center px-6 py-4 max-h-[182px]">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.svg" alt="edoroli" width={90} height={90} />
          </Link>
          <h2 className="text-red-700 font-bold text-7xl">EdoRoli</h2>
        </div>
        <div className="flex items-center gap-12">
          <Link href="/" className="hover:text-red-700">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-red-700">
            About Us
          </Link>
          <Link href="/contact-us" className="hover:text-red-700">
            Contact Us
          </Link>
          <Link href='/login'>
            <CustomButton
              title="Get Started"
              containerStyles="bg-red-700 text-white rounded-full px-6 py-[10px] text-[18px] hover:bg-red-800"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
