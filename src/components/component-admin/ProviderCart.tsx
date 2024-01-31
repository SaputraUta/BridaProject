import Image from "next/image";
import React from "react";
interface userProps {
  username: string;
  email: string;
  venueName: string;
}

const ProviderCart = ({ username, email, venueName }: userProps) => {
  return (
    <div className="flex gap-3 bg-co max-w-60 items-center rounded-xl">
      <div className="ml-3 bg-white rounded-full">
        <Image src={"/contactperson.svg"} alt="user" width={50} height={50} />
      </div>
      <div className="flex flex-col gap-5 p-2 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-white">{username}</h3>
          <p className="text-xs font-bold text-white">{email}</p>
        </div>
        <h4 className="text-sm font-bold text-white">{venueName}</h4>
        <div className="flex gap-1 self-end p-2">
          <Image
            src="/edit.svg"
            alt="edit"
            width={25}
            height={25}
            className="hover:scale-125 cursor-pointer"
          />
          <Image
            src="/hapus.svg"
            alt="edit"
            width={25}
            height={25}
            className="hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProviderCart;
