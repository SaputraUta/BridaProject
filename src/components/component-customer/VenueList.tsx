import { useEffect, useState } from "react";
import Venue from "./Venue";
import { useRouter } from "next/router";
import axios from "axios";

type City = {
  city_id: number;
  nama_city: string;
  venueoncity: Venue[];
};

type Venue = {
  venue_id: number;
  nama_venue: string;
  gambar_venue: string;
  alamat_venue: string;
  link_maps: string;
  penanggung_jawab: string;
  roomonvenue: Room[];
};

type Room = {
  room_id: number;
  nama_room: string;
  gambar_room: string;
  harga_room: number;
  kapasitas: string;
  status: boolean;
  desc_room: string;
};

const VenueList = () => {
  const router = useRouter();
  const { search } = router.query;
  const searchQuery = (search as string) || "";
  const [data, setData] = useState<City[]>();
  const [isLoading, setLoading] = useState(true);

  async function ambilData() {
    const response = await axios.get(
      "http://localhost:3000/api/venuelist-page-customer"
    );
    setData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    ambilData();
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  // const updatedFilteredData = data.map((kota) => {
  //   const updatedKota = { ...kota };
  //   updatedKota.Venue = updatedKota.Venue.filter((venue) =>
  //     venue.nama.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   return updatedKota;
  // });

  return (
    <div className="w-[1080px]">
      <div className="mx-[100px] mt-12 w-full">
        <div className="mt-12 grid grid-cols-4 gap-5">
          {/* {updatedFilteredData?.map((kota) =>
            kota.Venue.map((venue) => (
              <Venue
                key={venue.venue_id}
                id={kota.id}
                venue_id={venue.venue_id}
                imageUrl={venue.gambar}
                nama={venue.nama}
                kota={kota.kota}
              />
            ))
          )} */}
        </div>
      </div>
    </div>
  );
};

export default VenueList;
