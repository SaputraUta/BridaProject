import CustomButtons from "../component-dashboard/CustomButton";
import Link from "next/link";
import Image from "next/image";

const HeaderCustomer = () => {
  return (
    <header className="fixed top-0 w-full z-10 bg-blue-950 ">
      <nav className="mx-24 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.svg" alt="edoroli" width={28} height={45} />
          </Link>
          <h2 className="text-white font-bold text-2xl">EdoRoli</h2>
        </div>
        <div className="flex items-center gap-12">
          <Link href="/login">
            <CustomButtons
              title="Logout"
              containerStyles="bg-co text-white rounded-xl px-6 py-[10px] text-[18px] hover:scale-105"
            />
          </Link>
          <img
            src="/userlogo.png"
            alt="user"
            width="60px"
            height="60px"
            className="rounded-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default HeaderCustomer;
