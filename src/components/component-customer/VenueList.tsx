import { useEffect, useState } from "react";
import Venue from "./Venue";
import { useRouter } from "next/router";
import axios from "axios";

type VenueType = {
  venue_id: number;
  nama: string;
  gambar: string;
  alamat: string;
  link_maps: string;
  Penanggung_jawab: string;
  room: RoomType[];
};

export type RoomType = {
  room_id: number;
  nama_room: string;
  gambar: string;
  harga: number;
  kapasitas: number;
  deskripsi_room: string;
};

type KotaType = {
  id: number;
  kota: string;
  Venue: VenueType[];
};

const VenueList = () => {
  const router = useRouter();
  const { search } = router.query;
  const searchQuery = (search as string) || "";
  const [data, setData] = useState<KotaType[]>();
  const [isLoading, setLoading] = useState(true);

  async function ambilData() {
    const response = await axios.get(
      "https://mocki.io/v1/98dd4af9-41ae-446f-8801-d8332014bc7f"
    );
    setData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    ambilData();
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  const updatedFilteredData = data.map((kota) => {
    const updatedKota = { ...kota };
    updatedKota.Venue = updatedKota.Venue.filter((venue) =>
      venue.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return updatedKota;
  });

  return (
    <div>
      <div className="mt-12">
        <div className="mt-12 grid grid-cols-4 gap-5">
          {updatedFilteredData?.map((kota) =>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueList;
