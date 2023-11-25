import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LayoutProvider from "@/layout/layout-provider";
import NavProvider from "@/components/component-provider/NavProvider";

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

const index = () => {
  const [data, setData] = useState<ProviderType>();
  const [venue, setVenue] = useState<Venue>();
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState<room>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      fetch("https://mocki.io/v1/0cc72633-3502-4b02-b09e-9270eae992ae")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        });
      const venue_id = router.query.venue_id as string;
      const getData = data?.Venue.find(
        (item) => item.venue_id === parseInt(venue_id)
      );
      setVenue(getData);
    }
  }, [router, data]);

  const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRoomId = parseInt(e.target.value);
    const room = venue?.room.find((room) => room.room_id === selectedRoomId);
    setRoom(room);
  };

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">Data not found...</p>;

  return (
    <LayoutProvider>
      <div className="mt-24 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavProvider />
        {venue ? (
          <div className="flex flex-col md:flex-row gap-5 mt-5">
            <div className="border-2 border-black rounded-xl bg-gray-200 w-full md:w-1/2">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-slate-800">
                {venue.nama}
              </h3>
              <div className="p-5 flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex flex-col gap-2 sm:gap-5">
                  <div className="flex justify-center sm:block">
                    <img src={venue.gambar} alt={venue.nama} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800">
                      Nama
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {venue.nama}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800">
                      Alamat
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {venue.alamat}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800">
                      Penanggung Jawab
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-800">
                      {venue.Penanggung_jawab}
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
                  {venue.room.map((room) => (
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
                      src={room?.gambar}
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
                      {room.deskripsi_room}
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
                      {room?.harga}k
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

export default index;
