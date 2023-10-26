import React from "react";

export default function ContactUs() {
  return (
    <div className="mx-[100px] mt-12 w-[1080px]" id="contactus">
      <h2 className="text-5xl font-bold">Contact Us</h2>
      <h3 className="text-2xl font-medium mt-2">
        Questions, concerns, feedback?
      </h3>
      <div className="flex gap-12 w-full mt-8">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="flex justify-between">
            <p>Fill in the form below</p>
            <p>info@Edoroli.com</p>
          </div>
          <div>
            <p>Name*</p>
            <input type="text" className="bg-gray-100 w-full" />
          </div>
          <div>
            <p>Email*</p>
            <input type="email" className="bg-gray-100 w-full" />
          </div>
          <div>
            <p>Phone Number*</p>
            <input type="number" className="bg-gray-100 w-full" />
          </div>
          <div>
            <p>Message*</p>
            <input
              type="text"
              className="bg-gray-100 w-full h-52 overflow-scroll"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 w-[40%] items-center">
          <h2 className="font-bold text-5xl">Our Adress</h2>
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
