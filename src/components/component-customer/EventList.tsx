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
    <div className="w-full">
      <div className="mx-[100px] mt-12 max-w-[1440px]">
        <div className="w-full">
          <h1 className="text-blue-950 text-5xl font-bold">Kategori Event</h1>
        </div>
        <div className="mt-12 grid gap-16">
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
    </div>
  );
};

export default EventList;
