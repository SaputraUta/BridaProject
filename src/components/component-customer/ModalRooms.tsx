import { useEffect } from "react";
import { RoomType } from "@/pages/customer/venue/[...segments]";
import Image from "next/image";

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
      <div className="flex gap-9 bg-red-50 p-3 rounded-xl w-3/4 h-fit">
        <div className="w-fit">
          <img
            src={roomData.gambar}
            alt={roomData.nama_room}
            className="h-full"
          />
        </div>
        <div className="w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h2 className="font-bold text-4xl">{roomData.nama_room}</h2>
            <Image
              src="/close.svg"
              alt="close"
              width={20}
              height={20}
              className="hover:cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="my-3">
            <h3 className="font-bold text-xl">Deskripsi:</h3>
            <p className="text-sm">
              {roomData.deskripsi_room} Lorem ipsum dolor sit amet consectetur.
              Aenean magna at volutpat facilisi elementum in dui diam rhoncus.
              Enim neque ultrices velit consectetur. Morbi et tellus quis
              accumsan metus vel risus sit fermentum. Enim ultricies risus sit
              ac id libero. Nulla pulvinar egestas diam vel. Massa blandit duis
              tellus eu libero nec. Turpis vel semper quis elementum purus
              venenatis. Nunc nec quis quam ornare mattis arcu vitae cum justo.
              Pulvinar pretium odio pellentesque magna.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl">
              Kapasitas: {roomData.kapasitas}
            </h3>
          </div>
          <div className="bg-co2 w-fit self-end">
            <h2 className="text-xl font-bold p-2">Harga: {roomData.harga}k/hari</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
