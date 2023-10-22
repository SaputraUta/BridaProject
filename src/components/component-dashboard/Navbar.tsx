import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 bg-blue-950">
      <nav className="max-w-[1440px] ml-[80px] mr-[72px] flex justify-between items-center px-6 py-4 max-h-[182px]">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.svg" alt="edoroli" width={75} height={75} />
          </Link>
          <h2 className="text-white font-bold text-5xl">EdoRoli</h2>
        </div>
        <div className="flex items-center gap-12">
          <Link href="/" className="text-white hover:text-to">
            Home
          </Link>
          <Link href="/about-us" className="text-white hover:text-to">
            About Us
          </Link>
          <Link href="/contact-us" className="text-white hover:text-to">
            Contact Us
          </Link>
          <Link href='/login'>
            <CustomButton
              title="Get Started"
              containerStyles="bg-co text-white rounded-full px-6 py-[10px] text-[18px] hover:underline"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
