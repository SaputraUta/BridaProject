import { useEffect } from "react";
import { RoomType } from "@/pages/customer/venue/[venue_id]";

interface ModalProps {
  roomData: RoomType | undefined;
  isOpen: boolean;
  onClose: () => void;
}

// Komponen Modal
const RoomModal = ({ roomData, isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  if (!isOpen || !roomData) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="flex items-center justify-center flex-col md:flex-row md:gap-9 bg-red-50 p-1 rounded-xl w-3/4 h-fit relative">
        <img
          src="/close.svg"
          alt="close"
          className="hover:cursor-pointer w-3 h-3 md:w-5 md:h-5 absolute top-3 left-3 md:left-[95%]"
          onClick={onClose}
        />
        <div className="w-3/4 md:w-1/3 mt-5 flex items-center justify-center">
          <img
            src={roomData.gambar_room}
            alt={roomData.nama_room}
            className="object-cover md:h-full"
          />
        </div>
        <div className="w-3/4 flex flex-col">
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-start">{roomData.nama_room}</h2>
          <div className="my-1 md:my-3">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">Deskripsi:</h3>
            <p className="text-xs md:text-base xl:text-xl">
              {roomData.desc_room}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xs md:text-base xl:text-xl">
              Kapasitas: {roomData.kapasitas}
            </h3>
          </div>
          <div className="bg-co2 w-fit self-start md:self-end">
            <h2 className="font-bold text-xs md:text-base xl:text-xl">
              Harga: {roomData.harga_room}k/hari
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
