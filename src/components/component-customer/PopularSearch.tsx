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
    fetch("https://mocki.io/v1/98dd4af9-41ae-446f-8801-d8332014bc7f")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p className="text-center text-3xl mt-5">Loading venue data...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  const venueMataram = data.find((item) => item.id === 1);
  const venueLoteng = data.find((item) => item.id === 2);
  const venueLobar = data.find((item) => item.id === 3);
  const venueLotim = data.find((item) => item.id === 4);
  const venueKLU = data.find((item) => item.id === 5);
  return (
    <>
        <h1 className="text-lg sm:text-xl md:text-2xl mt-5 font-bold lg:text-5xl">Popular Venue</h1>
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 md:gap-4 lg:gap-8 mt-2 sm:mt-4">
          {venueMataram ? (
            <PopularVenue
              id={venueMataram.id}
              venue_id={venueMataram.Venue[0].venue_id}
              kota={venueMataram?.kota}
              gambar={venueMataram.Venue[0].gambar}
              nama={venueMataram.Venue[0].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}

          {venueLoteng ? (
            <PopularVenue
              id={venueLoteng.id}
              venue_id={venueLoteng.Venue[1].venue_id}
              kota={venueLoteng?.kota}
              gambar={venueLoteng.Venue[1].gambar}
              nama={venueLoteng.Venue[1].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}

          {venueLobar ? (
            <PopularVenue
              id={venueLobar.id}
              venue_id={venueLobar.Venue[1].venue_id}
              kota={venueLobar?.kota}
              gambar={venueLobar.Venue[1].gambar}
              nama={venueLobar.Venue[1].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}

          {venueLotim ? (
            <PopularVenue
              id={venueLotim.id}
              venue_id={venueLotim.Venue[2].venue_id}
              kota={venueLotim?.kota}
              gambar={venueLotim.Venue[2].gambar}
              nama={venueLotim.Venue[2].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}

          {venueKLU ? (
            <PopularVenue
              id={venueKLU.id}
              venue_id={venueKLU.Venue[1].venue_id}
              kota={venueKLU?.kota}
              gambar={venueKLU.Venue[1].gambar}
              nama={venueKLU.Venue[1].nama}
            />
          ) : (
            <p>Venue not Found</p>
          )}
        </div>
      </>
  );
};

export default PopularSearch;
