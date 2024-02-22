import LayoutCustomer from "@/layout/layout-customer";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface EventType {
  event_id: number;
  category_event: string;
  gambar_event: string;
  desc_event: string;
  sop: string;
  alur_perizinan: string;
  template_surat?: string;
  kondisional: string;
}

const EventDetail = () => {
  const [isLoading, setLoading] = useState(true);
  const [eventData, setEventData] = useState<EventType>();
  const [error, setError] = useState("");
  const router = useRouter();
  let event_id = "";

  useEffect(() => {
    event_id = router.query.event_id as string;
  }, [router]);

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log(event_id);
      if (event_id) {
        const response = await axios.get(
          `https://edoroli.vercel.app/api/customer/event-detail?event_id=${event_id}`
        );
        setEventData(response.data);
        console.log(eventData);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [router]);

  if (isLoading) return <p className="h-screen flex justify-center items-center text-slate-900 font-medium text-sm sm:text-base md:text-lg">Loading...</p>;
  if (!eventData) return <p className="h-screen flex justify-center items-center text-slate-900 font-medium text-sm sm:text-base md:text-lg">No event data</p>;

  return (
    <LayoutCustomer>
      <div className="mt-32 sm:mt-36 mx-5 sm:mx-10 md:mx-16 lg:mx-24  ">
        <div className="flex flex-col sm:items-center sm:flex-row gap-3 sm:border-b-2">
          {eventData?.gambar_event ? (
            <div className="w-full sm:w-2/5 border-b-2 sm:border-b-0">
              <Image
                src={eventData.gambar_event}
                alt={eventData.category_event}
                width={400}
                height={400}
                className="my-4 mx-auto"
              />
            </div>
          ) : (
            <p className="text-center mx-auto text-xs sm:text-sm md:text-base">
              Image Not Found
            </p>
          )}

          <div className="p-4 rounded-xl sm:w-[60%]">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              {eventData?.category_event}
            </h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              {eventData.desc_event}
            </p>
          </div>
        </div>
        <div className="mt-5 border-b-2 p-4">
          <h3 className="font-bold text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            SOP (Standar Operasi Prosedur)
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base">
            {eventData.sop}
          </p>
        </div>
        <div className="mt-10 p-4 border-b-2">
          <h3 className="font-bold text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Alur Perizinan
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base">
            {eventData.alur_perizinan}
          </p>
        </div>
        <div className="mt-10 border-b-2 p-4">
          <h3 className="mt-2 font-bold text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Template Surat
          </h3>
          {eventData.template_surat ? eventData.template_surat : "COMING SOON"}
        </div>
      </div>
    </LayoutCustomer>
  );
};

export default EventDetail;
