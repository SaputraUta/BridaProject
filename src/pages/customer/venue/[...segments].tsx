import LayoutCustomer from "@/layout/layout-customer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavUser from "@/components/component-customer/NavUser";
import SearchBar from "@/components/component-customer/SearchBar";

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

type KotaType = {
  id: number;
  kota: string;
  Venue: VenueType[];
};

const VenueDetails = () => {
  const router = useRouter();
  const [venueData, setVenueData] = useState<VenueType>();
  const [kotaData, setKotaData] = useState<KotaType>();
  const [data, setData] = useState<KotaType[]>();
  const [isLoading, setLoading] = useState(true);

  const id = router.query.segments?.[0] as string;
  const venue_id = router.query.segments?.[1] as string;

  useEffect(() => {
    fetch("https://mocki.io/v1/98dd4af9-41ae-446f-8801-d8332014bc7f")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    if (router.isReady) {
      const getId = data?.find((item) => item.id === parseInt(id));
      const getVenueId = getId?.Venue.find(
        (item) => item.venue_id === parseInt(venue_id)
      );
      setKotaData(getId);
      setVenueData(getVenueId);
    }
  }, [router, data]);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  return (
    <LayoutCustomer>
      <div className="mx-[100px] max-w-[1240px] mt-12 flex flex-col gap-y-5">
        <div className="flex gap-4 max-h-[253px] items-center">
          <div className="w-[799px] h-[253px] flex justify-center border border-black rounded-xl">
            {venueData?.gambar ? (
              <Image
                src={venueData?.gambar}
                alt={venueData?.nama}
                width={300}
                height={253}
                className="opacity-50 p-2"
              />
            ) : (
              <p>Gambar tidak ditemukan</p>
            )}
            <h2 className="font-bold text-5xl absolute top-[360px] left-[200px]">
              Gelanggang Pemuda
            </h2>
          </div>
          <div className="w-[421px] h-[253px] flex items-center justify-center">
            <Image
              src="/placeholderlocation.jpg"
              alt="location"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex gap-4 border border-black rounded-lg h-[605px] items-center bg-gray-50">
          <div className="w-[799px] p-3 pt-1 flex flex-col gap-y-7">
            <h3 className="text-center">Details</h3>
            <div className="flex gap-3 bg-gray-200 overflow-hidden">
              <Image
                src="/location.svg"
                alt="location"
                width={24}
                height={24}
                className="ml-2"
              />
              <p className="p-2">{venueData?.alamat}</p>
            </div>
            <div className="flex gap-3 bg-gray-200 overflow-hidden">
              <Image
                src="/capacity.svg"
                alt="penanggungjawab"
                width={24}
                height={24}
                className="ml-2"
              />
              <p className="p-2">{venueData?.Penanggung_jawab}</p>
            </div>

            <h4 className="font-medium text-xl">About event venue</h4>

            <div className="flex gap-16">
              <div className="w-52 h-[272px] border border-black rounded lg"></div>
              <div className="w-52 h-[272px] border border-black rounded lg"></div>
              <div className="w-52 h-[272px] border border-black rounded lg"></div>
            </div>
          </div>
          <div className="w-[405px] h-[557px] bg-gray-200 m-2 rounded-lg flex flex-col justify-between content-center">
            <div className="mt-16 flex flex-col gap-10 items-center">
              <input
                type="text"
                placeholder="Date"
                className="rounded-lg p-1"
              />
              <input
                type="text"
                placeholder="Rooms"
                className="rounded-lg p-1"
              />
            </div>
            <div className="mb-16 flex flex-col gap-10 items-center">
              <button className="bg-blue-900 w-3/4 rounded-lg">
                <h4 className="p-2 font-medium text-xl text-white">Book</h4>
              </button>
              <button className="bg-blue-900 w-3/4 rounded-lg flex items-center justify-center">
                <Image
                  src="/whatsapp.svg"
                  alt="whatsapp"
                  width={24}
                  height={24}
                />
                <h4 className="p-2 font-medium text-xl text-white">Whatsapp</h4>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 max-h-[253px]">
          <div className="w-[799px] h-full border flex flex-col gap-5 border-black rounded-xl bg-gray-50">
            <h3 className="font-medium text-2xl m-4 mb-0">Detail Informasi</h3>
            <p className="m-4 mt-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="w-[421px] h-[275px] flex items-center justify-center border border-black bg-gray-50 rounded-lg">
            <div className="">
              <h1 className="font-bold text-xl">INI KALENDER</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-8 border border-black rounded-lg bg-gray-50">
          <h4 className="font-medium text-xl p-3">Rooms</h4>
          <div className="grid grid-cols-4 gap-24 p-3">
          {venueData?.room.map((item)=>(
            <Image src={item.gambar} alt={item.nama_room} width={240} height={240} />
          )
          )}
          </div>
        </div>
      </div>
    </LayoutCustomer>
  );
};

export default VenueDetails;
