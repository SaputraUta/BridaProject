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
    <div className="rounded-lg border-2 border-blue-700">
      <div className="flex gap-4 w-full m-3">
        <Image src={imageUrl} alt={judul} width={260} height={260} />
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-2xl">{judul}</h3>
          <div className="flex flex-col gap-3 justify-between bg-gray-100 rounded-lg p-2 mr-10 h-full">
            <p className="">{deskripsi}</p>
            <Link href={"/customer/eventlist/" + event_id} className="hover:scale-105 text-white py-3 px-10 rounded-2xl self-end bg-blue-950 mr-1">Lihat Detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCart;
