import EventCart from "./EventCart";
import { useEffect, useState } from "react";
import axios from "axios";

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

const EventList = () => {
  const [data, setData] = useState<EventType[]>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getEvent() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/customer/event"
      );
      setData(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      if (error.response) {
        setError(error.response.message);
      }
    }
  }

  useEffect(() => {
    getEvent();
  }, []);
  if (isLoading) return <p className="text-center mt-5 text-slate-900 font-medium text-sm sm:text-base md:text-lg">Loading...</p>;
  if (!data) return <p className="text-center mt-5 text-slate-900 font-medium text-sm sm:text-base md:text-lg">No profile data</p>;

  return (
    <div className="mt-5">
      <h1 className="font-bold mt-5 text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Kategori Event
      </h1>
      {error && (
        <p className="text-center mt-5 font-bold text-xs sm:text-sm md:text-base">
          {error}
        </p>
      )}
      <div className="mt-4 grid gap-4">
        {data.map((item) => (
          <EventCart
            key={item.event_id}
            event_id={item.event_id}
            imageUrl={item.gambar_event}
            judul={item.category_event}
            deskripsi={item.desc_event}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
