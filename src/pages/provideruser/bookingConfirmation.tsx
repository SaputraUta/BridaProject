import NavProvider from "@/components/component-provider/NavProvider";
import OrderList from "@/components/component-provider/OrderList";
import LayoutProvider from "@/layout/layout-provider";
import axios from "axios";
import { useEffect, useState } from "react";

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
}

export default function BookingConfirmation() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [transactions, setTransactions] = useState<transaction[]>();

  async function fetchData() {
    setIsLoading(true);
    setMessage("");
    try {
      const response = await axios.get(
        "https://edoroli.vercel.app/api/provider/transaction"
      );
      setIsLoading(false);
      setTransactions(response.data);
    } catch (err: any) {
      setIsLoading(false);
      setMessage(err.response.data.message);
    }
  }

  async function handleBooking(id: number) {
    const response = await axios.patch(
      `https://edoroli.vercel.app/api/provider/transaction?id=${id}`
    );
    setTransactions(
      transactions?.map((transaction) => {
        if (transaction.id === response.data.id) {
          return { ...transaction, is_approved: response.data.is_approved };
        } else {
          return transaction;
        }
      })
    );
  }

  async function rejectBooking(id: number) {
    const response = await axios.delete(
      `https://edoroli.vercel.app/api/provider/transaction?id=${id}`
    );
    setTransactions(
      transactions?.map((transaction) => {
        if (transaction.id === response.data.id) {
          return { ...transaction, is_rejected: response.data.is_rejected };
        } else {
          return transaction;
        }
      })
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutProvider>
      <div className="mt-24 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavProvider />
        <div className="mt-5 border-t-2 shadow-md rounded-xl">
          <div className="p-5">
            <h2 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">
              Order List
            </h2>
            <div className="flex flex-col gap-5">
              {isLoading && (
                <p className="text-slate-900 text-center font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                  Loading transaction data...
                </p>
              )}
              {!isLoading &&
                transactions?.map((transaction) => (
                  <OrderList
                    key={transaction.id}
                    id={transaction.id}
                    tgl_booking={transaction.tgl_booking}
                    nama_room={transaction.nama_room}
                    nama_venue={transaction.nama_venue}
                    room_Id={transaction.room_Id}
                    venue_id={transaction.venue_id}
                    prov_Id={transaction.prov_Id}
                    cust_Id={transaction.cust_Id}
                    is_approved={transaction.is_approved}
                    is_rejected={transaction.is_rejected}
                    handleBooking={handleBooking}
                    rejectBooking={rejectBooking}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
}
