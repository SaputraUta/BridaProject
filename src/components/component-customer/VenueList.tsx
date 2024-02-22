import { useEffect, useState } from "react";
import Venue from "./Venue";
import { useRouter } from "next/router";
import axios from "axios";

type VenueType = {
  venue_id: number;
  nama_venue: string;
  gambar_venue: string;
  alamat_venue: string;
  penanggung_jawab: string;
  room: RoomType[];
  city_name: string;
  prov_Id: number;
};

export type RoomType = {
  room_id: number;
  nama_room: string;
  gambar: string;
  harga: number;
  kapasitas: number;
  deskripsi_room: string;
};

const VenueList = () => {
  const router = useRouter();
  const { search } = router.query;
  const searchQuery = (search as string) || "";
  const [data, setData] = useState<VenueType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function ambilData() {
    try{
      setError("");
      setLoading(true);
      const response = await axios.get("https://edoroli.vercel.app/api/customer/venues");
      setData(response.data);
      setLoading(false);
    }catch(error: any){
      setLoading(false);
      if (error.response){
        setError(error.response.message);
      }
    }
  }

  useEffect(() => {
    ambilData();
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  const filteredData = data.filter((venue) =>
  venue.nama_venue.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <> 
    {error && <p className="text-center text-gray-900 text-xs sm:text-sm md:text-base lg:text-lg font-bold">{error}</p>}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-16">
          {filteredData?.map((venue) =>
              <Venue
                key={venue.venue_id}
                venue_id={venue.venue_id}
                imageUrl={venue.gambar_venue}
                nama={venue.nama_venue}
                kota={venue.city_name}
              />
          )}
        </div>
    </>
  );
};

export default VenueList;
