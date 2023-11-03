import Image from "next/image";
import { useEffect, useState } from "react";
import VenueCart from "./VenueCart";

type ProviderType = {
  id: number;
  Vendor: string;
  Venue: Venue[];
};

type Venue = {
  venue_id: number;
  nama: string;
  gambar: string;
  alamat: string;
  link_maps: string;
  Penanggung_jawab: string;
  room: room[];
};

type room = {
  room_id: number;
  nama_room: string;
  gambar: string;
  harga: number;
  kapasitas: string;
  deskripsi_room: string;
};

const VenueList = () => {
  const [data, setData] = useState<ProviderType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://mocki.io/v1/0cc72633-3502-4b02-b09e-9270eae992ae")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">Data not found...</p>;

  return (
    <div className="mx-[100px] max-w-[1080px]">
      <div className="relative mt-10">
        <Image
          src="/provider-allstay.jpg"
          alt="venue"
          width={1080}
          height={315}
        />
        <h1 className="text-7xl font-bold absolute top-48 left-80">
          Hallo, {data.Vendor}!
        </h1>
      </div>
      <h2 className="text-4xl font-bold mt-10">Your venue</h2>
      <div className="grid grid-cols-4 gap-x-5 gap-y-16 mt-5">
        {data.Venue.map((venue) => (
          <VenueCart
            venue_id={venue.venue_id}
            nama={venue.nama}
            gambar={venue.gambar}
            Penanggung_jawab={venue.Penanggung_jawab}
          />
        ))}
      </div>
    </div>
  );
};

export default VenueList;
