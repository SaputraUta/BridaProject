import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div>
      <div className="flex justify-between max-w-7xl">
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 w-[65%] md:w-[60%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-blue-950">
            EdoRoli
          </h1>
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold tracking-wide md:tracking-wider md:leading-7">
            Solusi reservasi venue terlengkap se-Pulau Lombok
          </h2>
          <p className="text-xs opacity-75 tracking-wider leading-5 sm:text-sm md:text-base lg:text-lg md:leading-6 md:tracking-wider">
            Membuat reservasi menjadi lebih efisien dan efektif dengan
            ketersediaan informasi yang lengkap dan sistem yang mudah dan cepat
          </p>
          <Link href="/login" className="mt-5 sm:mt-8 md:mt-10">
            <CustomButton
              title="Get Started"
              containerStyles="bg-co text-white text-sm sm:text-base md:text-lg font-medium rounded-xl px-5 py-2 hover:bg-co2"
            />
          </Link>
        </div>
        <div className="w-[35%] md:w-[40%] mt-5 sm:mt-0 flex items-center">
          <img
            src="/landingpage-illustration.svg"
            alt="landingpage"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
