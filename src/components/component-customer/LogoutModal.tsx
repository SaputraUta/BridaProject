import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface LogoutModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoutModal({ isOpen, onClose }: LogoutModal) {
  async function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const response = await axios.get("https://edoroli.vercel.app/api/logout");
      console.log(response.data.message);
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);
  return (
    <div>
      {isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-xl w-fit h-fit flex flex-col items-center justify-center gap-10 p-5">
            <h3 className="text-lg sm:text-xl md:text-2xl">
              Apakah anda yakin ingin Logout?
            </h3>
            <div className="flex gap-5">
              <button
                onClick={handleLogout}
                className="bg-green-600 text-white rounded-2xl w-20 flex justify-center items-center"
              >
                <p className="py-3 px-5 text-center text-sm sm:text-base md:text-lg">
                  Ya
                </p>
              </button>
              <button
                onClick={onClose}
                className="bg-red-600 text-white rounded-2xl w-20 flex justify-center items-center"
              >
                <p className="py-3 px-5 text-center text-sm sm:text-base md:text-lg">
                  Tidak
                </p>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
