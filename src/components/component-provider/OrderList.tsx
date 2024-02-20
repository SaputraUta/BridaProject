import axios from "axios";
import { useState } from "react";

interface transaction {
  id: number;
  tgl_booking: string;
  nama_room: string;
  nama_venue: string;
  room_Id: number;
  venue_id: number;
  prov_Id: number;
  cust_Id: number;
  is_approved: boolean;
}

const OrderList = ({
  id,
  tgl_booking,
  nama_room,
  nama_venue,
  room_Id,
  venue_id,
  prov_Id,
  cust_Id,
  is_approved,
}: transaction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function approveBooking(id: number) {
    setIsLoading(true);
    setMessage("");
    setErrorMessage("");
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/provider/transaction?id=${id}`
      );
      setIsLoading(false);
      setMessage(response.data.message);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err.response.data.message);
    }
  }

  return (
    <div key={id} className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-xs sm:text-xs md:text-sm lg:text-base text-to opacity-75">
          {new Date(tgl_booking).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
          {nama_venue}
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          {nama_room}
        </p>
      </div>
      {is_approved && (
        <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-green-500">
          Approved
        </p>
      )}
      {!is_approved && (
        <div className="flex flex-col items-center">
          {!message && (
            <button
              onClick={() => approveBooking(id)}
              disabled={isLoading}
              className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-slate-100 py-2 px-5 bg-blue-500 rounded-md hover:scale-105"
            >
              Approve
            </button>
          )}
          {isLoading && (
            <p className="text-xs sm:text-sm md:text-base text-slate-900 text-centerr">
              Approving...
            </p>
          )}
          {message && (
            <p className="text-xs sm:text-sm md:text-base text-green-500 text-centerr">
              {message}
            </p>
          )}
          {errorMessage && (
            <p className="text-xs sm:text-sm md:text-base text-red-500 text-centerr">
              {errorMessage}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderList;
