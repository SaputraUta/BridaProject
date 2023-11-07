import React from "react";
import CustomerCart from "./CustomerCart";
import ProviderCart from "./ProviderCart";

const CustomerList = () => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-3 gap-2 w-full">
        <CustomerCart username="Saputra" email="saputra.uta50@gmail.com" />
        <CustomerCart username="Gerald" email="gerald123@gmail.com" />
        <CustomerCart username="Dayat" email="dayat123@gmail.com" />
        <CustomerCart username="Alfin" email="alfinchipmunks@gmail.com" />
        <CustomerCart username="Dika" email="radityadika@gmail.com" />
      </div>
      <h1 className="text-2xl font-bold mt-8 text-blue-950">Manage Customer</h1>
      <div className="mt-5 grid grid-cols-3 gap-2 w-full">
        <ProviderCart
          username="Uta"
          email="saputra.uta50@gmail.com"
          venueName="Gelanggang Pemuda"
        />
        <ProviderCart
          username="Erald"
          email="gerald123@gmail.com"
          venueName="Gelanggang Pemuda"
        />
        <ProviderCart
          username="Ayat"
          email="dayat123@gmail.com"
          venueName="Gelanggang Pemuda"
        />
        <ProviderCart
          username="Apin"
          email="alfinchipmunks@gmail.com"
          venueName="Gelanggang Pemuda"
        />
        <ProviderCart
          username="Ika"
          email="radityadika@gmail.com"
          venueName="Gelanggang Pemuda"
        />
      </div>
    </div>
  );
};

export default CustomerList;
