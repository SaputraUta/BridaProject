import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className="flex justify-between max-w-7xl">
      <div>
        <h1 className="text-[96px] font-bold text-blue-950">EdoRoli</h1>
        <h2 className="text-3xl font-bold">
          Solusi reservasi venue terlengkap se-Pulau Lombok
        </h2>
        <p className="text-lg opacity-75">
          Membuat reservasi menjadi lebih efisien dan efektif dengan
          ketersediaan informasi yang lengkap dan sistem yang mudah dan cepat
        </p>
        <Link href="/login">
          <CustomButton
            title="Get Started"
            containerStyles="bg-co text-white rounded-xl px-6 py-[10px] mt-8 text-[18px] hover:bg-co2"
          />
        </Link>
      </div>
      <Image
        src="/landingpage-illustration.svg"
        alt="landingpage"
        width={450}
        height={450}
      />
    </div>
  );
};

export default LandingHero;
