import EventCart from "./EventCart";
import { useEffect, useState } from "react";

interface EventType {
  event_id: number;
  judul: string;
  imageUrl: string;
  deskripsi: string;
  sop_perizinan: string;
  alur_perizinan: string;
  template_surat: string;
  kondisional: string;
}

const EventList = () => {
  const [data, setData] = useState<EventType[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mocki.io/v1/0190c1d0-aa5b-40aa-b649-0f3c869a9905")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  return (
    <div className="mt-5">
      <h1 className="font-bold mt-5 text-slate-800 text-lg sm:text-xl md:text-2xl lg:text-3xl">Kategori Event</h1>
      <div className="mt-4 grid gap-4">
        {data.map((item) => (
          <EventCart
            key={item.event_id}
            event_id={item.event_id}
            imageUrl={item.imageUrl}
            judul={item.judul}
            deskripsi={item.deskripsi}
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
