import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-blue-950 z-10 max-w-7xl">
      <nav className="ml-[80px] mr-[72px] flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.svg" alt="edoroli" width={28} height={45} />
          </Link> 
          <h2 className="text-white font-bold text-2xl">EdoRoli</h2>
        </div>
        <div className="flex items-center gap-12">
          <Link href="/" className="text-white hover:text-to">
            Home
          </Link>
          <Link href="/AboutUs" className="text-white hover:text-to">
            About Us
          </Link>
          <Link href="/ContactUs" className="text-white hover:text-to">
            Contact Us
          </Link>
          <Link href='/login'>
            <CustomButton
              title="Get Started"
              containerStyles="bg-co text-white rounded-xl px-6 py-[10px] text-[18px] hover:bg-co2"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
