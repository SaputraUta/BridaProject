import { useState } from "react";

const OrderList = () => {
  const [isApproved, setIsApproved] = useState(false);
  return (
    <div className="mt-5 flex flex-col sm:flex-row sm:gap-10 bg-gray-300 justify-between">
      <div className="flex flex-col p-5 gap-5 sm:w-[75%]">
        <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">Nama Pemesan</h4>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur. Habitant nisi sed consequat
          sit nunc amet ullamcorper porttitor. Lectus nulla adipiscing quisque
          varius.
        </p>
      </div>
      <div className="flex flex-row sm:flex-col p-5 gap-5 sm:w-[20%] justify-center">
        <button
          onClick={() => setIsApproved(!isApproved)}
          className={
            isApproved
              ? "bg-green-500 text-white rounded-xl w-full font-medium py-2 hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg"
              : "bg-blue-800 text-white rounded-xl w-full font-medium py-2 hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg"
          }
        >
          {isApproved ? "Approved" : "Approve Booking"}
        </button>
        <button className="text-blue-800 bg-transparent border-2 py-2 border-blue-800 rounded-xl w-full font-medium hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg">
          Decline Booking
        </button>
      </div>
    </div>
  );
};

export default OrderList;
