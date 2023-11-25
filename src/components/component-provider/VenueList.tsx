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
    <>
      <div className="relative mt-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-800">Hallo, {data.Vendor}!</h1>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mt-5">Your venue</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-x-5 md:gap-y-16">
        {data.Venue.map((venue) => (
          <VenueCart
            key={venue.venue_id}
            venue_id={venue.venue_id}
            nama={venue.nama}
            gambar={venue.gambar}
            Penanggung_jawab={venue.Penanggung_jawab}
          />
        ))}
      </div>
    </>
  );
};

export default VenueList;
