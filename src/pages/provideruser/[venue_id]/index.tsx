import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LayoutProvider from "@/layout/layout-provider";
import NavProvider from "@/components/component-provider/NavProvider";
import Image from "next/image";

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
      <NavProvider />
      <div className="mx-[100px] mt-12 max-w-[1080px]">
        {venue ? (
          <div className="flex flex-col gap-12">
            <div className="w-full h-fit border-2 border-black rounded-xl">
              <h3 className="mt-4 text-3xl font-bold text-center">
                {venue.nama}
              </h3>
              <div className="flex justify-center m-3">
                <Image
                  src={venue.gambar}
                  alt={venue.nama}
                  width={250}
                  height={250}
                  className=""
                />
              </div>
              <div className="p-5 flex gap-5">
                <div className="flex flex-col gap-4 w-[70%]">
                  <div>
                    <h4 className="text-xl font-bold">Nama</h4>
                    {venue.nama}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Alamat</h4>
                    {venue.alamat}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Penanggung Jawab</h4>
                    {venue.Penanggung_jawab}
                  </div>
                </div>
                <div className="w-[25%] flex justify-center">
                  <Image
                    src="/MyVenueCalendar.svg"
                    alt="Calendar"
                    width={250}
                    height={250}
                    className="self-start"
                  />
                </div>
              </div>
              <div className="p-5">
                <button className="py-3 px-14 bg-green-600 rounded-2xl w-full">
                  Edit
                </button>
              </div>
            </div>
            <div className="w-full h-fit border-2 border-black rounded-xl">
              <div className="flex justify-center m-5">
                <select
                  name="room"
                  className="w-1/3 border-2 border-black text-center text-2xl font-bold"
                  onChange={handleRoomChange}
                >
                  <option value="">-- --</option>
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
                    <h4 className="text-xl font-bold">Nama Room</h4>
                    {room?.nama_room}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Deskripsi</h4>
                    {room?.deskripsi_room}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Kapasitas</h4>
                    {room?.kapasitas}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Harga</h4>
                    {room?.harga}k
                  </div>
                  <button className="py-3 px-14 bg-green-600 rounded-2xl">
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
