import LayoutCustomer from "@/layout/layout-customer";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import RoomModal from "@/components/component-customer/ModalRooms";
import PaymentModal from "@/components/component-customer/PaymentModal";
import axios from "axios";
import UserContext from "@/context/userContext";

type VenueType = {
  venue_id: number;
  nama_venue: string;
  gambar_venue: string;
  alamat_venue: string;
  penanggung_jawab: string;
  roomonvenue: RoomType[];
  city_name: string;
  prov_Id: number;
};

export type RoomType = {
  room_id: number;
  nama_room: string;
  gambar_room: string;
  harga_room: number;
  kapasitas: number;
  desc_room: string;
};

const VenueDetails = () => {
  const router = useRouter();
  const [venueData, setVenueData] = useState<VenueType>();
  const [isLoading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<RoomType>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(false);
  // const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [error, setError] = useState("");
  const user = useContext(UserContext);
  const [transactionMessage, setTransactionMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  let venue_id = "";

  useEffect(() => {
    venue_id = router.query.venue_id as string;
    fetchData();
  }, [router]);

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log(venue_id);
      if (venue_id) {
        const response = await axios.get(
          `http://localhost:3000/api/customer/venue/detail?venue_id=${venue_id}`
        );
        setVenueData(response.data);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center">Loading venue data...</p>
      </div>
    );
  if (!venueData)
    return (
      <p className="flex items-center justify-center h-screen">
        No profile data
      </p>
    );

  const handleRoomClick = (room: RoomType) => {
    setSelectedRoom(room);
    setIsModalOpen(!isModalOpen);
  };

  // const handlePaymentClick = (e: FormEvent) => {
  //   e.preventDefault();
  //   selectedRoom ? setIsPaymentOpen(!isPaymentOpen) : null;
  // };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const closePayment = () => {
  //   setIsPaymentOpen(!isPaymentOpen);
  // };

  const handlePostTransaction = async (e: FormEvent) => {
    e.preventDefault();
    setTransactionMessage("");
    if (selectedRoom) {
      setTransactionLoading(true);
      const tgl_booking = new Date(selectedDate).toISOString();
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      formData.set("tgl_booking", tgl_booking);
      formData.set("nama_room", selectedRoom.nama_room);
      const room_id = selectedRoom.room_id.toString();
      formData.set("room_Id", room_id);
      formData.set("nama_venue", venueData.nama_venue);
      const venue_id = venueData.venue_id.toString();
      formData.set("venue_id", venue_id);
      const prov_Id = venueData.prov_Id.toString();
      formData.set("prov_Id", prov_Id);
      const cust_Id = user.id.toString();
      formData.set("cust_Id", cust_Id);
      const formDataJSON = Object.fromEntries(formData.entries());
      console.log(formDataJSON);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/customer/transaction",
          formDataJSON
        );
        setTransactionLoading(false);
        formElement.reset();
        setTransactionMessage("Transaction Success!");
      } catch (error: any) {
        setTransactionLoading(false);
        formElement.reset();
        if (error.response) {
          setError(error.response.data.message);
        }
      }
    }
  };

  const basePath = "/home/saputra/edoroli/BridaProject/public";
  const relativePath = venueData?.gambar_venue.replace(basePath, "");

  return (
    <LayoutCustomer>
      <div className="mt-28 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24 flex flex-col gap-y-5">
        <div className="flex flex-col sm:flex-row sm:gap-1 gap-5 items-center h-full">
          <div className="flex justify-center rounded-xl max-h-72 max-w-[288px] lg:max-h-80 lg:max-w-[320px] overflow-hidden">
            {venueData?.gambar_venue ? (
              <img
                src={relativePath}
                alt={venueData?.nama_venue}
                className="object-cover object-center w-full h-full"
              />
            ) : (
              <p>Gambar tidak ditemukan</p>
            )}
          </div>
          <div className="border-2 flex flex-col gap-2 sm:gap-5 rounded-xl bg-gray-50 flex-1 h-72 max-h-72 overflow-y-scroll">
            <h3 className="font-medium text-sm sm:text-base md:text-lg lg:text-2xl m-4 mb-0">
              Detail Informasi
            </h3>
            <p className="m-4 mt-0 text-xs sm:text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 border-2 rounded-lg h-fititems-center bg-gray-50">
          <div className="p-3 pt-1 flex flex-col gap-y-5 sm:gap-y-7">
            <h3 className="text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl">
              {venueData?.nama_venue}
            </h3>
            <div className="flex sm:gap-3 bg-gray-200 overflow-hidden">
              <img src="/location.svg" alt="location" className="ml-2" />
              <p className="p-2 text-sm sm:text-base">
                {venueData?.alamat_venue}
              </p>
            </div>
            <div className="flex sm:gap-3 bg-gray-200 overflow-hidden">
              <img src="/capacity.svg" alt="penanggungjawab" className="ml-2" />
              <p className="p-2 text-sm sm:text-base">
                {venueData?.penanggung_jawab}
              </p>
            </div>
            <h4 className="font-medium text-sm sm:text-base md:text-lg">
              About event venue
            </h4>
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
              onSubmit={handlePostTransaction}
            >
              <input
                type="date"
                placeholder="Date"
                name="tgl_booking"
                className="p-1 w-3/4 text-sm sm:text-base md:text-lg rounded-lg"
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                }}
              />
              <select
                name="nama_room"
                className="p-1 w-3/4 text-sm sm:text-base md:text-lg rounded-lg"
                onChange={(e) => {
                  const selectedRoomId = parseInt(e.target.value);
                  const room = venueData.roomonvenue?.find(
                    (room) => room.room_id === selectedRoomId
                  );
                  setSelectedRoom(room);
                }}
              >
                {venueData?.roomonvenue ? (
                  <>
                    {" "}
                    <option value="">Choose a room</option>
                    {venueData.roomonvenue.map((room) => (
                      <option value={room.room_id} key={room.room_id}>
                        {room.nama_room}
                      </option>
                    ))}{" "}
                  </>
                ) : (
                  <option value="">This venue does not yet have a room</option>
                )}
              </select>
              {transactionLoading && (
                <p className="text-xs sm:text-sm md:text-base text-center font-medium">
                  Booking the rooms...
                </p>
              )}
              {transactionMessage && (
                <p className="text-xs sm:text-sm md:text-base text-center font-medium">
                  {transactionMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={!venueData.roomonvenue}
                className="bg-blue-900 w-3/4 rounded-lg hover:scale-105 mt-4 sm:mt-28 md:mt-20 disabled:bg-blue-500 disabled:hover:scale-100"
              >
                <h4 className="p-2 font-medium text-sm sm:text-base md:text-lg text-white">
                  Book
                </h4>
              </button>
            </form>
            {/* <PaymentModal
              onClose={closePayment}
              isOpen={isPaymentOpen}
              roomData={selectedRoom}
            /> */}
            <div className="mb-4 sm:mb-16 flex flex-col items-center mt-5 sm:mt-0 md:mt-4 ">
              <button className="bg-blue-900 w-3/4 rounded-lg hover:scale-105">
                <h4 className="p-2 font-medium text-sm sm:text-base md:text-lg text-white">
                  Whatsapp
                </h4>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full items-center flex flex-col mt-2 sm:mt-8 border-2 rounded-lg bg-gray-50">
          <h4 className="font-medium text-sm sm:text-base md:text-lg lg:text-xl p-3">
            Rooms
          </h4>
          {venueData.roomonvenue && venueData.roomonvenue.length > 0 ? (
            <div className="grid gap-4 sm:gap-10 sm:grid-cols-4 p-3">
              {venueData.roomonvenue.map((item) => (
                <div
                  className="hover:scale-105 hover:cursor-pointer"
                  key={item.room_id}
                  onClick={() => handleRoomClick(item)}
                >
                  <img src={item.gambar_room} alt={item.nama_room} />
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl text-center mt-2">
                    {item.nama_room}
                  </h4>
                </div>
              ))}
            </div>
          ) : (
            <p className="my-5 text-xs sm:text-sm md:text-base lg:text-lg">
              This venue does not yet have a room
            </p>
          )}
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
