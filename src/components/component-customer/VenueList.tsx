import { useEffect, useState } from "react";
import Venue from "./Venue";

type KotaType = {
  id: number;
  kota: string;
  Venue: VenueType[];
};

type VenueType = {
  venue_id: number;
  nama: string;
  gambar: string;
  alamat: string;
  link_maps: string;
  Penanggung_jawab: string;
  room: RoomType[];
};

type RoomType = {
  room_id: number;
  nama_room: string;
  gambar: string;
  harga: number;
  kapasitas: number;
  deskripsi_room: string;
};

const VenueList = () => {
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
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  return (
    <div className="w-[1080px]">
      <div className="mx-[100px] mt-12 w-full">
        <div className="mt-12 grid gap-16">
          {data.map((item) =>
            item.Venue.map((venue) => (
              <Venue
                id={item.id}
                venue_id={venue.venue_id}
                imageUrl={venue.gambar}
                nama={venue.nama}
                nama_room={venue.room.map((room) => room.nama_room).join(", ")}
                harga={venue.room[0].harga}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueList;
