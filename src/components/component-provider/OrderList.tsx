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
  is_rejected: boolean;
  handleBooking: (id: number) => void;
  rejectBooking: (id: number) => void;
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
  is_rejected,
  handleBooking,
  rejectBooking,
}: transaction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rejectMessage, setRejectMessage] = useState("");

  async function approveBooking(id: number) {
    setIsLoading(true);
    setMessage("");
    setErrorMessage("");
    try {
      handleBooking(id);
      setIsLoading(false);
      setMessage("Booking approved");
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage("Something went wrong, please try again later");
    }
  }

  async function handleRejectBooking(id: number) {
    setIsLoading(true);
    setMessage("");
    setErrorMessage("");
    try {
      rejectBooking(id);
      setIsLoading(false);
      setRejectMessage("Booking rejected");
    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage("Something went wrong, please try again later");
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
      {is_rejected && (
        <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-red-500">
          Rejected
        </p>
      )}
      {!is_approved && !is_rejected && (
        <div className="flex flex-col items-center">
          {!message && !isLoading && !rejectMessage && !errorMessage && (
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => approveBooking(id)}
                disabled={isLoading}
                className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-slate-100 py-2 px-5 bg-blue-500 rounded-md hover:scale-105 w-full"
              >
                Approve
              </button>
              <button
                onClick={() => handleRejectBooking(id)}
                disabled={isLoading}
                className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-slate-100 py-2 px-5 bg-red-500 rounded-md hover:scale-105 w-full"
              >
                Reject
              </button>
            </div>
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
          {rejectMessage && (
            <p className="text-xs sm:text-sm md:text-base text-red-500 text-centerr">
              {rejectMessage}
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
