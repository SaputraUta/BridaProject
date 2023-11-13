import Link from "next/link";
import { useEffect, useState } from "react";

interface LogoutModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoutModal({ isOpen, onClose }: LogoutModal) {
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
            <h3 className="text-2xl">Apakah anda yakin ingin Logout?</h3>
            <div className="flex gap-5">
              <Link
                href="/login/customerlogin"
                className="bg-green-600 text-white rounded-2xl w-20"
              >
                <p className="py-3 px-5 text-center">Ya</p>
              </Link>
              <button onClick={onClose} className="bg-red-600 text-white rounded-2xl w-20">
                <p className="py-3 px-5 text-center">Tidak</p>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
