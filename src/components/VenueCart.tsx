import Venue from "./Venue";
import axios from "axios";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

type KotaType = {
  id: number;
  kota: string;
  Venue: VenueType[];
};

type VenueType = {
  venue_id: number;
  nama: string;
  gambar: string;
};

export default function VenueCart() {
  const [data, setData] = useState<KotaType[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mocki.io/v1/3476fae4-25a3-4ca1-a0be-99bd3f26d038")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  const venueMataram = data.find((item) => item.id === 1);
  const venueLoteng = data.find((item) => item.id === 2);

  return (
    <div className="z-0 max-w-[1440px] ml-[100px] mr-[72px] border-b border-black shadow-[0_2px_0px_0px_rgba(0,0,0,0.1)] pb-[48px]">
      <div className="grid grid-cols-3 gap-x-28 gap-y-14 mt-12">
        {venueMataram?.Venue.map((item) => (
          <Venue
            key={item.venue_id}
            kota={venueMataram.kota}
            nama={item.nama}
            gambar={item.gambar}
          />
        ))}
        {venueLoteng?.Venue.map((item) => (
          <Venue
            key={item.venue_id}
            kota={venueLoteng.kota}
            nama={item.nama}
            gambar={item.gambar}
          />
        ))}
      </div>
    </div>
  );
}
