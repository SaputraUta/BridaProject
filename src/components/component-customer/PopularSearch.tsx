import React from "react";
import { useState, useEffect } from "react";
import PopularVenue from "./PopularVenue";

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

const PopularSearch = () => {
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
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  const venueMataram = data.find((item) => item.id === 1);
  const venueLoteng = data.find((item) => item.id === 2);
  const venueLobar = data.find((item) => item.id === 3);
  const venueLotim = data.find((item) => item.id === 4);
  const venueKLU = data.find((item) => item.id === 5);
  return (
    <div className="w-[1140px] mx-[100px]">
      <div className="w-full">
        <h1 className="font-bold text-5xl mt-3">Popular Searches</h1>
        <div className="grid grid-cols-5 mt-10 gap-5 max-w-[1440px] w-[1080px]">
          {venueMataram ? (
            <PopularVenue
              kota={venueMataram?.kota}
              gambar={venueMataram.Venue[0].gambar}
              nama={venueMataram.Venue[0].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}

          {venueLoteng ? (
            <PopularVenue
              kota={venueLoteng?.kota}
              gambar={venueLoteng.Venue[1].gambar}
              nama={venueLoteng.Venue[1].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}

          {venueLobar ? (
            <PopularVenue
              kota={venueLobar?.kota}
              gambar={venueLobar.Venue[2].gambar}
              nama={venueLobar.Venue[0].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}

          {venueLotim ? (
            <PopularVenue
              kota={venueLotim?.kota}
              gambar={venueLotim.Venue[0].gambar}
              nama={venueLotim.Venue[0].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}

          {venueKLU ? (
            <PopularVenue
              kota={venueKLU?.kota}
              gambar={venueKLU.Venue[1].gambar}
              nama={venueKLU.Venue[1].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularSearch;
