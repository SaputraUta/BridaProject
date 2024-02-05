import { useContext, useEffect, useState } from "react";
import VenueCart from "./VenueCart";
import axios from "axios";
import { useRouter } from "next/router";
import UserContext from "@/context/userContext";

type VenueType = {
  venue_id: number;
  nama_venue: string;
  gambar_venue: string;
  alamat_venue: string;
  penanggung_jawab: string;
  room: room[];
  city_name: string;
  prov_Id: number;
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
  const [data, setData] = useState<VenueType[]>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const user = useContext(UserContext);

  useEffect(() => {
    const fetchVenuesData = async () => {
      setErrorMessage("");
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/provider/venues?provId=${user.id}`)
        setData(response.data)
        console.log(response.data);
        setIsLoading(false);
      } catch (error: any) {
        if (error.response.status === 401) {
          console.error("Unauthorized")
          router.push("login/providerlogin");
        }
        else if (error.response.status === 500) {
          setErrorMessage("Something went wrong at the time, please try again later")
        }
      }
    }
    fetchVenuesData();
  }, []);

  if (isLoading) return <p className="text-sm sm:text-base text-slate-900 mt-5">Loading venue data...</p>;
  if (errorMessage) return <p className="text-sm sm:text-base text-slate-900 mt-5">{errorMessage}</p>;
  if (!data) return <p className="text-sm sm:text-base text-slate-900 mt-5">Data not found...</p>;

  return (
    <>
      <div className="relative mt-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-800">Hallo, {user.username}!</h1>
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mt-5">Your venue</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-x-5 md:gap-y-16">
        {data.map((venue) => (
          <VenueCart
            key={venue.venue_id}
            venue_id={venue.venue_id}
            nama={venue.nama_venue}
            gambar={venue.gambar_venue}
            Penanggung_jawab={venue.penanggung_jawab}
          />
        ))}
      </div>
    </>
  );
};

export default VenueList;
