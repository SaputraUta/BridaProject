import LayoutCustomer from "@/layout/layout-customer";
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
      <div className="mt-28 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24 flex flex-col gap-y-5">
        <div className="flex gap-1 items-center">
          <div className="object-cover flex justify-center border-2 rounded-xl">
            {venueData?.gambar ? (
              <img
                src={venueData?.gambar}
                alt={venueData?.nama}
                className="w-full h-full"
              />
            ) : (
              <p>Gambar tidak ditemukan</p>
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15780.624019204048!2d116.088064!3d-8.580995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc07d856569bf%3A0xda2c83c75a587419!2sGelanggang%20Pemuda%20Mataram!5e0!3m2!1sid!2sid!4v1698386010077!5m2!1sid!2sid"
              className="w-full sm:h-48 md:h-52 lg:h-56"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 border-2 rounded-lg h-fititems-center bg-gray-50">
          <div className="p-3 pt-1 flex flex-col gap-y-5 sm:gap-y-7">
            <h3 className="text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl">{venueData?.nama}</h3>
            <div className="flex sm:gap-3 bg-gray-200 overflow-hidden">
              <img
                src="/location.svg"
                alt="location"
                className="ml-2"
              />
              <p className="p-2 text-sm sm:text-base">{venueData?.alamat}</p>
            </div>
            <div className="flex sm:gap-3 bg-gray-200 overflow-hidden">
              <img
                src="/capacity.svg"
                alt="penanggungjawab"
                className="ml-2"
              />
              <p className="p-2 text-sm sm:text-base">{venueData?.Penanggung_jawab}</p>
            </div>
            <h4 className="font-medium text-sm sm:text-base md:text-lg">About event venue</h4>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 items-center justify-center sm:gap-5 md:gap-6">
              <img
                src="/abouteventvenue.svg"
                alt="category1"
                className="border-2 rounded-xl"
              />
              <img
                src="/abouteventvenue2.svg"
                alt="category1"
                className="border-2 rounded-xl"
              />
              <img
                src="/abouteventvenue3.svg"
                alt="category1"
                className="border-2 rounded-xl"
              />
            </div>
          </div>
          <div className="bg-gray-200 sm:m-2 rounded-lg flex flex-col justify-between sm:w-full md:w-1/2">
            <form
              className="sm:mt-16 mt-5 flex flex-col gap-4 sm:gap-6 items-center"
              onSubmit={handlePaymentClick}
            >
              <input type="date" placeholder="Date" className="p-1 w-3/4 text-sm sm:text-base md:text-lg rounded-lg" />
              <select
                name="room"
                className="p-1 w-3/4 text-sm sm:text-base md:text-lg rounded-lg"
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
                className="bg-blue-900 w-3/4 rounded-lg hover:scale-105 mt-4 sm:mt-28 md:mt-20"
              >
                <h4 className="p-2 font-medium text-sm sm:text-base md:text-lg text-white">Book</h4>
              </button>
            </form>
            <PaymentModal
              onClose={closePayment}
              isOpen={isPaymentOpen}
              roomData={selectedRoom}
            />
            <div className="mb-4 sm:mb-16 flex flex-col items-center mt-5 sm:mt-0 md:mt-4 ">
              <button className="bg-blue-900 w-3/4 rounded-lg hover:scale-105">
                <h4 className="p-2 font-medium text-sm sm:text-base md:text-lg text-white">Whatsapp</h4>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="border-2 flex flex-col gap-2 sm:gap-5 rounded-xl bg-gray-50">
            <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-2xl m-4 mb-0">Detail Informasi</h3>
            <p className="m-4 mt-0 text-xs sm:text-sm md:text-base">
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
          <img src="/calendar.jpg" alt="calendar" className="sm:w-1/3 h-fit max-w-md max-h-56 sm:max-w-none sm:max-h-none" />
        </div>
        <div className="w-full items-center flex flex-col mt-2 sm:mt-8 border-2 rounded-lg bg-gray-50">
          <h4 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl p-3">Rooms</h4>
          <div className="grid gap-4 sm:gap-10 sm:grid-cols-4 p-3">
            {venueData?.room.map((item) => (
              <div
                className="hover:scale-105 hover:cursor-pointer"
                key={item.room_id}
                onClick={() => handleRoomClick(item)}
              >
                <img
                  src={item.gambar}
                  alt={item.nama_room}
                />
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl text-center mt-2">{item.nama_room}</h4>
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
