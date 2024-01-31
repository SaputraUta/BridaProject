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
      <div className="mt-32 sm:mt-36 mx-5 sm:mx-10 md:mx-16 lg:mx-24  ">
        <div className="flex flex-col sm:items-center sm:flex-row gap-3 sm:border-b-2">
          {eventData?.imageUrl ? (
            <div className="w-full sm:w-2/5 border-b-2 sm:border-b-0">
              <Image
                src={eventData.imageUrl}
                alt={eventData.judul}
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
              {eventData?.judul}
            </h1>
            <p className="mt-2 text-xs sm:text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. Aliquam in consequat sed
              tempus elementum. Fringilla massa vulputate quis mauris proin
              ullamcorper ultricies sem. Sagittis rutrum tellus risus eu erat.
              Orci quis ut ullamcorper et morbi vestibulum leo cursus vel. Lorem
              et est augue ut montes congue urna tortor.
            </p>
          </div>
        </div>
        <div className="mt-5 border-b-2 p-4">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            SOP (Standar Operasi Prosedur)
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Aliquam in consequat sed
            tempus elementum. Fringilla massa vulputate quis mauris proin
            ullamcorper ultricies sem. Sagittis rutrum tellus risus eu erat.
            Orci quis ut ullamcorper et morbi vestibulum leo cursus vel. Lorem
            et est augue ut montes congue urna tortor. Mauris ut neque tortor
            semper egestas aliquet viverra quis. Vel consectetur quis non odio
            leo sit pellentesque adipiscing. Adipiscing malesuada non nibh quam.
            Egestas ornare consectetur habitant faucibus egestas vitae. Viverra
            nascetur vel vestibulum sit malesuada tempor orci. Ut vel sit enim
            urna urna posuere arcu. Nec fermentum lacus gravida ut. Adipiscing
            nulla porta feugiat augue pharetra ac proin interdum dignissim.
          </p>
        </div>
        <div className="mt-10 p-4 border-b-2">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Alur Perizinan
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Aliquam in consequat sed
            tempus elementum. Fringilla massa vulputate quis mauris proin
            ullamcorper ultricies sem. Sagittis rutrum tellus risus eu erat.
            Orci quis ut ullamcorper et morbi vestibulum leo cursus vel. Lorem
            et est augue ut montes congue urna tortor. Mauris ut neque tortor
            semper egestas aliquet viverra quis. Vel consectetur quis non odio
            leo sit pellentesque adipiscing. Adipiscing malesuada non nibh quam.
            Egestas ornare consectetur habitant faucibus egestas vitae. Viverra
            nascetur vel vestibulum sit malesuada tempor orci. Ut vel sit enim
            urna urna posuere arcu. Nec fermentum lacus gravida ut. Adipiscing
            nulla porta feugiat augue pharetra ac proin interdum dignissim.
          </p>
        </div>
        <div className="mt-10 border-b-2 p-4">
          <h3 className="mt-2 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            Template Surat
          </h3>
          {eventData?.template_surat}
        </div>
      </div>
    </LayoutCustomer>
  );
};

export default EventDetail;
