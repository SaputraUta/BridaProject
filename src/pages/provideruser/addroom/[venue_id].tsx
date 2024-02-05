import RegisterRoom from "@/components/component-provider/RegisterRooms";

import LayoutProvider from "@/layout/layout-provider";
import React from "react";

export default function AddRooms() {
  return (
    <LayoutProvider>
       <div className="mt-24 mx-5 sm:mt-32 md:mt-36 sm:mx-10 md:mx-16 lg:mx-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-5">
          Room Register
        </h2>
        <RegisterRoom />
      </div>
    </LayoutProvider>
  );
}
