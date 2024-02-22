import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LayoutProvider from "@/layout/layout-provider";
import NavProvider from "@/components/component-provider/NavProvider";
import axios from "axios";
import Link from "next/link";

type VenueType = {
  venue_id: number;
  nama_venue: string;
  gambar_venue: string;
  alamat_venue: string;
  penanggung_jawab: string;
  roomonvenue: room[];
  city_name: string;
  prov_Id: number;
};

type room = {
  room_id: number;
  nama_room: string;
  gambar_room: string;
  harga_room: number;
  kapasitas: string;
  desc_room: string;
};

const Index = () => {
  const [venue, setVenue] = useState<VenueType>();
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState<room>();
  const router = useRouter();
  const [error, setError] = useState("");

  let venue_id = "";

  useEffect(() => {
    venue_id = router.query.venue_id as string;
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        if (venue_id) {
          const response = await axios.get(
            `https://edoroli.vercel.app/api/customer/venue/detail?venue_id=${venue_id}`
          );
          setVenue(response.data);
          console.log(response);
        }
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        if (error.response) {
          setError(error.response.data.message);
        }
      }
    };

    fetchData();
  }, [router]);

  const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRoomId = parseInt(e.target.value);
    const room = venue?.roomonvenue.find((room) => room.room_id === selectedRoomId);
    setRoom(room);
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center">Loading venue data...</p>
      </div>
    );
  if (!venue)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center">Data not found</p>
      </div>
    );

    const basePath = "/home/saputra/edoroli/BridaProject/public";
    const relativePath = venue?.gambar_venue.replace(basePath, "");

  return (
    <LayoutProvider>
      <div className="mt-24 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavProvider />
        {venue ? (
          <div className="flex flex-col md:flex-row gap-5 mt-5">
            <div className="border-2 border-black rounded-xl bg-gray-200 w-full md:w-1/2">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-slate-800">
                {venue.nama_venue}
              </h3>
              <div className="p-5 flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-col gap-2 sm:gap-5">
                  <div className="flex justify-center sm:block">
                    <img src={relativePath} alt={venue.nama_venue} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800">
                      Nama
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {venue.nama_venue}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800">
                      Alamat
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {venue.alamat_venue}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800">
                      Penanggung Jawab
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {venue.penanggung_jawab}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/MyVenueCalendar.svg"
                    alt="Calendar"
                    className="self-start"
                  />
                </div>
              </div>
              <div className="p-5">
                <button className="py-3 px-14 bg-green-600 rounded-xl sm:rounded-2xl font-medium text-white w-full text-xs sm:text-sm md:text-base lg:text-lg">
                  Edit
                </button>
                <Link href={"/provideruser/addroom/"+venue.venue_id} className="block text-center py-3 px-14 bg-blue-600 rounded-xl sm:rounded-2xl font-medium text-white w-full text-xs sm:text-sm md:text-base lg:text-lg mt-5">
                  Add room
                </Link>
              </div>
            </div>
            <div className="border-2 border-black rounded-xl w-full md:w-1/2 bg-gray-200">
              <div className="flex justify-center m-2">
                <select
                  name="room"
                  className="w-full border-2 border-black text-sm sm:text-base md:text-lg lg:text-xl font-medium text-center text-slate-800"
                  onChange={handleRoomChange}
                >
                  <option value="">Select Room</option>
                  {venue.roomonvenue?.map((room) => (
                    <option value={room.room_id} key={room.room_id}>
                      {room.nama_room}
                    </option>
                  ))}
                </select>
              </div>
              {room ? (
                <div className="flex flex-col gap-4 w-full p-5">
                  <div className="flex justify-center">
                    <img
                      src={room?.gambar_room}
                      alt={room?.nama_room}
                      width={250}
                      height={250}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800">
                      Nama Room
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {room.nama_room}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800">
                      Deskripsi
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {room.desc_room}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800">
                      Kapasitas
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {room?.kapasitas}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-slate-800">
                      Harga
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {room?.harga_room}k
                    </p>
                  </div>
                  <button className="py-3 px-14 bg-green-600 rounded-2xl font-medium text-white">
                    Edit
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <h1 className="h-screen w-screen text-5xl">Data not found</h1>
        )}
      </div>
    </LayoutProvider>
  );
};

export default Index;
