const OrderList = () => {
  return (
    <div className="mt-5 flex gap-10 bg-gray-300 justify-between">
      <div className="flex flex-col p-5 gap-5 w-[75%]">
        <h4 className="font-bold text-lg">Nama Pemesan</h4>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur. Habitant nisi sed consequat
          sit nunc amet ullamcorper porttitor. Lectus nulla adipiscing quisque
          varius. Sagittis faucibus mattis nisl facilisis vivamus orci massa. At
          arcu a nibh pulvinar eu sit ultrices. Nisi eu purus tincidunt metus.
          Dolor sodales cras ut id mus amet sit pretium. Bibendum erat id
          ultrices aliquet in.
        </p>
      </div>
      <div className="flex flex-col p-5 gap-5 w-[20%] justify-center">
        <button className="bg-blue-800 text-white rounded-xl w-full font-bold py-2 hover:scale-105">Approve Booking</button>
        <button className="text-blue-800 bg-transparent border-2 py-2 border-blue-800 rounded-xl w-full font-bold hover:scale-105">Decline Booking</button>
      </div>
    </div>
  );
};

export default OrderList;
