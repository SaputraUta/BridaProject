import NavUser from "@/components/component-customer/NavUser";
import LayoutCustomer from "@/layout/layout-customer";
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
}

export default function riwayat() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [transactions, setTransactions] = useState<transaction[]>();

  async function fetchData() {
    console.log("REQ");
    setIsLoading(true);
    setMessage("");
    try {
      const response = await axios.get(
        "http://localhost:3000/api/customer/transaction"
      );
      setIsLoading(false);
      setTransactions(response.data);
    } catch (err: any) {
      setIsLoading(false);
      setMessage(err.response.data.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutCustomer>
      <div className="mt-28 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <NavUser />
        <div className="mt-5 border-t-2 shadow-md rounded-xl">
          <div className="p-5">
            <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-2">
              Riwayat reservasi
            </h4>
            <div className="flex flex-col gap-5">
              {isLoading && (
                <p className="text-slate-900 text-center font-medium text-xs sm:text-sm md:text-base lg:text-lg">
                  Loading transaction data...
                </p>
              )}
              {transactions?.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-xs sm:text-xs md:text-sm lg:text-base text-to opacity-75">
                      {new Date(transaction.tgl_booking).toLocaleDateString(
                        "id-ID",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                      {transaction.nama_venue}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      {transaction.nama_room}
                    </p>
                  </div>
                    {transaction.is_approved && <button className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-green-500">Approved</button>}
                    {!transaction.is_approved && <button className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-yellow-500">Waiting for approvment</button>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutCustomer>
  );
}
