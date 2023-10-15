import Image from "next/image";
import Link from "next/link";

type Props = {
  event_id: number;
  imageUrl: string;
  judul: string;
  deskripsi: string;
};

const EventCart = ({ imageUrl, judul, deskripsi, event_id }: Props) => {
  return (
    <div className="rounded-lg border border-black">
      <div className="flex gap-4 w-full m-3">
        <Image src={imageUrl} alt={judul} width={260} height={260} />
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl">{judul}</h3>
          <div className="flex flex-col gap-3 justify-between bg-gray-100 rounded-lg p-2 mr-10 h-full">
            <p className="text-gray-400">{deskripsi}</p>
            <Link href={"/customer/eventCategory/" + event_id} className="hover:text-red-600 hover:underline self-end">Lihat Detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCart;
