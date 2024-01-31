import React from "react";

export default function ContactUs() {
  return (
    <div className="sm:max-w-xl md:max-w-4xl lg:max-w-7xl">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Contact Us</h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mt-2 opacity-75">
        Questions, concerns, feedback?
      </h3>
      <div className="flex flex-col gap-5 md:flex-row md:gap-12 w-full mt-8">
        <div className="md:w-[60%] flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-xs sm:text-sm md:text-base">Fill in the form below</p>
            <p className="text-xs sm:text-sm md:text-base">info@Edoroli.com</p>
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base">Name*</p>
            <input type="text" className="bg-gray-100 w-full" />
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base">Email*</p>
            <input type="email" className="bg-gray-100 w-full" />
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base">Phone Number*</p>
            <input type="number" className="bg-gray-100 w-full" />
          </div>
          <div>
            <p className="text-xs sm:text-sm md:text-base">Message*</p>
            <input
              type="text"
              className="bg-gray-100 w-full h-52 overflow-scroll"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-8 md:w-[40%] items-center">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our Adress</h2>
          <img src="/placeholderlocation.jpg" alt="location" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit at non volutpat netus
            nec arcu. Egestas dis velit at dolor. Ultrices vestibulum elit risus
            nibh. Metus a sem pellentesque in. Ultrices facilisis dignissim sit
            sed.
          </p>
        </div>
      </div>
    </div>
  );
}
