import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
  judul: string;
};

const EventCart = ({ imageUrl, judul }: Props) => {
  return (
    <div className="rounded-lg border-2 border-black h-fit">
      <div className="flex flex-col gap-1 p-2">
        <Image src={imageUrl} alt={judul} width={250} height={250} className="w-full p-1 self-center"/>
        <div className="flex justify-between">
          <h3 className="font-bold text-xl max-w-[75%] overflow-hidden whitespace-nowrap overflow-ellipsis">
            {judul}
          </h3>
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
    </div>
  );
};

export default EventCart;
