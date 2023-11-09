import LayoutCustomer from "@/layout/layout-customer";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import RoomModal from "@/components/component-customer/ModalRooms";
import PaymentModal from "@/components/component-customer/PaymentModal";

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

const VenueDetails = () => {
  const router = useRouter();
  const [venueData, setVenueData] = useState<VenueType>();
  const [data, setData] = useState<KotaType[]>();
  const [isLoading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<RoomType>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

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
      setVenueData(getVenueId);
    }
  }, [router, data]);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  const handleRoomClick = (room: RoomType) => {
    setSelectedRoom(room);
    setIsModalOpen(!isModalOpen);
  };

  const handlePaymentClick = (e: FormEvent) => {
    e.preventDefault();
    selectedRoom ? setIsPaymentOpen(!isPaymentOpen) : null;
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closePayment = () => {
    setIsPaymentOpen(!isPaymentOpen);
  };

  return (
    <LayoutCustomer>
      <div className="mx-24 mt-32 flex flex-col gap-y-5">
        <div className="flex gap-4 max-h-[253px] items-center">
          <div className="w-[40%] h-[253px] flex justify-center border-2 rounded-xl relative">
            {venueData?.gambar ? (
              <img
                src={venueData?.gambar}
                alt={venueData?.nama}
                className="opacity-75 w-full h-full"
              />
            ) : (
              <p>Gambar tidak ditemukan</p>
            )}
            <h2 className="font-bold text-5xl absolute top-48 left-10">
              {venueData?.nama}
            </h2>
          </div>
          <div className="w-[60%] h-[253px] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15780.624019204048!2d116.088064!3d-8.580995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc07d856569bf%3A0xda2c83c75a587419!2sGelanggang%20Pemuda%20Mataram!5e0!3m2!1sid!2sid!4v1698386010077!5m2!1sid!2sid"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex gap-4 border-2 rounded-lg h-fititems-center bg-gray-50">
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

            <div className="grid grid-cols-3 gap-16">
              <Image
                src="/abouteventvenue.svg"
                alt="category1"
                width={200}
                height={220}
                className="border-2 rounded-xl"
              />
              <Image
                src="/abouteventvenue2.svg"
                alt="category1"
                width={200}
                height={220}
                className="border-2 rounded-xl"
              />
              <Image
                src="/abouteventvenue3.svg"
                alt="category1"
                width={200}
                height={220}
                className="border-2 rounded-xl"
              />
            </div>
          </div>
          <div className="w-[405px] h-[557px] bg-gray-200 m-2 rounded-lg flex flex-col justify-between content-center">
            <form
              className="mt-16 flex flex-col gap-10 items-center"
              onSubmit={handlePaymentClick}
            >
              <input type="date" placeholder="Date" className="p-1 w-3/4" />
              <select
                name="room"
                className="p-1 w-3/4"
                onChange={(e) => {
                  const selectedRoomId = parseInt(e.target.value);
                  const room = venueData?.room.find(
                    (room) => room.room_id === selectedRoomId
                  );
                  setSelectedRoom(room);
                }}
              >
                <option value="">Choose a room</option>
                {venueData?.room.map((room) => (
                  <option value={room.room_id} key={room.room_id}>
                    {room.nama_room}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-blue-900 w-3/4 rounded-lg hover:scale-105 mt-4"
              >
                <h4 className="p-2 font-medium text-xl text-white">Book</h4>
              </button>
            </form>
            <PaymentModal
              onClose={closePayment}
              isOpen={isPaymentOpen}
              roomData={selectedRoom}
            />
            <div className="mb-16 flex flex-col gap-10 items-center">
              <button className="bg-blue-900 w-3/4 rounded-lg flex items-center justify-center hover:scale-105">
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
          <div className="w-[799px] h-full border-2 flex flex-col gap-5 rounded-xl bg-gray-50">
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
          <img src="/calendar.jpg" alt="calendar" width={421} height={265} />
        </div>
        <div className="w-full flex flex-col mt-8 border-2 rounded-lg bg-gray-50">
          <h4 className="font-medium text-xl p-3">Rooms</h4>
          <div className="grid grid-cols-4 gap-24 p-3">
            {venueData?.room.map((item) => (
              <div
                className="hover:scale-105 hover:cursor-pointer"
                key={item.room_id}
                onClick={() => handleRoomClick(item)}
              >
                <Image
                  src={item.gambar}
                  alt={item.nama_room}
                  width={240}
                  height={240}
                />
                <h4 className="text-xl text-center mt-2">{item.nama_room}</h4>
              </div>
            ))}
          </div>
          <RoomModal
            roomData={selectedRoom}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>
      </div>
    </LayoutCustomer>
  );
};

export default VenueDetails;
