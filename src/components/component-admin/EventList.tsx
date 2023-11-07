import { useEffect, useState } from "react";
import EventCart from "./EventCart";

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
    <div className="grid grid-cols-3 gap-3 mt-5">
      {data.map((event) => (
        <EventCart imageUrl={event.imageUrl} judul={event.judul} />
      ))}
    </div>
  );
};

export default EventList;
