import Image from "next/image";

const VenueHero = () => {
  return (
    <div className="mx-[100px] m-16 relative max-h-[1440px] w-[1080px]">
      <div>
        <Image src="/provider-allstay.jpg" alt="venue" width={1080} height={315} />
        <h1 className="text-7xl font-bold absolute top-52 left-32">GELANGGANG PEMUDA</h1>
      </div>
    </div>
  );
};

export default VenueHero;
