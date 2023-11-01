import { RoomType } from "@/pages/customer/venue/[...segments]";
import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomData: RoomType | undefined;
}

const PaymentModal = ({ isOpen, onClose, roomData }: ModalProps) => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAccount(e.target.value);
  };

  const handlePayment = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
    }, 3000);
  };

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
      {isLoading ? (
        <div className="flex flex-col items-center w-3/4 h-fit bg-white rounded-xl gap-5 p-8">
          <p>Loading...</p>
        </div>
      ) : isSuccess ? (
        <div className="flex flex-col items-center w-3/4 h-fit bg-white rounded-xl gap-5 p-8">
          <Image src="/success.svg" alt="success" width={50} height={50} />
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-3xl text-green-500">
              Payment Success
            </h2>
            <p className="text-gray-600">Nomor Pembayaran 0012351</p>
          </div>
          <div className="flex justify-between w-3/4">
            <h3 className="text-2xl">Total pembayaran</h3>
            <h3 className="text-2xl">{roomData.harga}</h3>
          </div>
          <div className="flex justify-between w-3/4">
            <h3 className="text-2xl">Metode</h3>
            <h3 className="text-2xl">Bank</h3>
          </div>
          <div className="flex justify-between w-3/4">
            <h3 className="text-2xl">Nama bank</h3>
            <h3 className="text-2xl">{selectedAccount}</h3>
          </div>
          <button
            type="button"
            className="px-16 py-3 bg-red-600 text-white rounded-xl hover:scale-105 mt-5"
            onClick={() => {
              setIsSuccess(!isSuccess);
              onClose();
            }}
          >
            Lihat Invoice
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col items-center w-3/4 h-fit bg-white rounded-xl gap-5 p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex justify-between w-3/4 mb-5">
            <h3 className="text-2xl font-bold">Pilih metode transaksi</h3>
            <Image
              src="/close.svg"
              alt="close"
              width={20}
              height={20}
              className="hover:cursor-pointer hover:scale-105"
              onClick={onClose}
            />
          </div>
          <div className="flex justify-between w-3/4">
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                value="BRI"
                checked={selectedAccount === "BRI"}
                onChange={handleAccountChange}
              />
              <Image src="/bri-logo.svg" alt="bri" width={40} height={40} />
              <label htmlFor="rekening1" className="font-medium">
                transfer ke (ATM, BRI Mobile, Internet Banking)
              </label>
            </div>
            <p className="font-medium">Rp. 0</p>
          </div>
          <div className="flex justify-between w-3/4">
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                value="BCA"
                checked={selectedAccount === "BCA"}
                onChange={handleAccountChange}
              />
              <Image src="/bca-logo.svg" alt="bri" width={40} height={40} />
              <label htmlFor="rekening1" className="font-medium">
                transfer ke (ATM, BRI Mobile, Internet Banking)
              </label>
            </div>
            <p className="font-medium">Rp. 2.500</p>
          </div>
          <div className="flex justify-between w-3/4">
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                value="BNI"
                checked={selectedAccount === "BNI"}
                onChange={handleAccountChange}
              />
              <Image src="/bni-logo.svg" alt="bri" width={40} height={40} />
              <label htmlFor="rekening1" className="font-medium">
                transfer ke (ATM, BRI Mobile, Internet Banking)
              </label>
            </div>
            <p className="font-medium">Rp 1.000</p>
          </div>

          <button
            type="submit"
            className="px-16 py-3 bg-red-600 text-white rounded-xl hover:scale-105 mt-5"
            onClick={handlePayment}
          >
            Pilih
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentModal;
