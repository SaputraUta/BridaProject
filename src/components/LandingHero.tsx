import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] ml-[100px] mr-[72px] pb-[48px] border-b border-black shadow-[0_2px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="text-[96px] font-bold text-red-700 mb-2">EdoRoli</h1>
        <h2 className="text-[48px] font-bold">
          Solusi reservasi venue terlengkap se-Pulau Lombok
        </h2>
        <p className="text-lg">
          Membuat reservasi menjadi lebih efisien dan efektif dengan
          ketersediaan informasi yang lengkap dan sistem yang mudah dan cepat
        </p>
        <Link href='/login'>
          <CustomButton
            title="Get Started"
            containerStyles="bg-red-700 text-white rounded-full px-6 py-[10px] mt-8 text-[18px] hover:bg-red-800"
          />
        </Link>
      </div>
      <div className="pt-36 padding-x justify-center">
        <Image
          src="/landingpage-illustration.svg"
          alt="landingpage"
          width="523"
          height="411"
        />
      </div>
    </div>
  );
};

export default LandingHero;
