import LayoutCustomer from "@/layout/layout-customer";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type EventType = {
  event_id: number;
  imageUrl: string;
  judul: string;
  deskripsi: string;
  sop_perizinan: string;
  alur_perizinan: string;
  template_surat: string;
  kondisional: string;
};

const EventDetail = () => {
  const [data, setData] = useState<EventType[]>();
  const [isLoading, setLoading] = useState(true);
  const [eventData, setEventData] = useState<EventType>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      fetch("https://mocki.io/v1/0190c1d0-aa5b-40aa-b649-0f3c869a9905")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });

      const event_id = router.query.event_id as string;
      const getData = data?.find(
        (item) => item.event_id === parseInt(event_id)
      );
      setEventData(getData);
    }
  }, [router, data]);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">No profile data</p>;

  return (
    <LayoutCustomer>
      <div className="w-full">
        <div className="max-w-[1440px] flex flex-col mx-[100px] items-center">
          {eventData?.imageUrl ? (
            <Image
              src={eventData.imageUrl}
              alt={eventData.judul}
              width={400}
              height={400}
              className="m-4"
            />
          ) : (
            <p className="text-center">Image Not Found</p>
          )}

          <h1 className="font-bold text-5xl p-2">{eventData?.judul}</h1>

          <div className="flex flex-wrap gap-5 items-center justify-center m-3">
            <div className="w-2/5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="w-2/5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="w-2/5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="w-2/5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </LayoutCustomer>
  );
};

export default EventDetail;
