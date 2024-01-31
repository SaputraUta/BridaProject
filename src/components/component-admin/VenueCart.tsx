import Image from "next/image";
type Venue = {
  imageUrl: string;
  name: string;
  kota: string;
};

const VenueCart = ({ imageUrl, name, kota }: Venue) => {
  return (
    <div className="flex flex-col h-fit border-2 rounded-xl">
      <Image
        src={imageUrl}
        alt={name}
        width={250}
        height={250}
        className="self-center p-1 w-full"
      />
      <h3 className="text-xl font-bold px-2 max-w-[75%] overflow-hidden whitespace-nowrap overflow-ellipsis">
        {name}
      </h3>
      <div className="flex gap-1 pb-2 px-2 justify-between max-w-full">
        <div className="flex gap-1 items-center max-w-[60%] ">
          <Image src="/location.svg" alt="location" width={20} height={20} />
          <h4 className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
            {kota}
          </h4>
        </div>
        <div className="flex gap-1 items-center">
          <Image
            src="/edit.svg"
            alt="edit"
            width={25}
            height={25}
            className="hover:scale-125 cursor-pointer"
          />
          <Image
            src="/hapus.svg"
            alt="edit"
            width={25}
            height={25}
            className="hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default VenueCart;
