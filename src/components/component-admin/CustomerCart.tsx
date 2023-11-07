import Image from "next/image";
import React from "react";
interface userProps {
  username: string;
  email: string;
}

const CustomerCart = ({ username, email }: userProps) => {
  return (
    <div className="flex gap-3 bg-co2 items-center rounded-xl">
      <div className="ml-3 bg-white rounded-full">
        <Image src={"/contactperson.svg"} alt="user" width={50} height={50} />
      </div>
      <div className="flex flex-col gap-5 p-2 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-white">{username}</h3>
          <p className="text-xs font-bold text-white">{email}</p>
        </div>
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

export default CustomerCart;
