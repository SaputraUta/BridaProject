// import { useEffect, useState } from "react";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   roomData: RoomTpe | undefined;
// }

// const PaymentModal = ({ isOpen, onClose, roomData }: ModalProps) => {
//   const [selectedAccount, setSelectedAccount] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedAccount(e.target.value);
//   };

//   const handlePayment = () => {
//     setIsLoading(true);

//     setTimeout(() => {
//       setIsSuccess(true);
//       setIsLoading(false);
//     }, 3000);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "visible";
//     }
//   }, [isOpen]);
//   if (!isOpen || !roomData) {
//     return null;
//   }
//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
//       {isLoading ? (
//         <div className="flex flex-col items-center w-3/4 h-fit bg-white rounded-xl gap-5 p-8">
//           <p>Loading...</p>
//         </div>
//       ) : isSuccess ? (
//         <div className="flex flex-col items-center w-3/4 h-fit bg-white rounded-xl gap-5 p-2 md:p-8">
//           <img src="/success.svg" alt="success" />
//           <div className="flex flex-col gap-3 items-center">
//             <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
//               Payment Success
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">Nomor Pembayaran 0012351</p>
//           </div>
//           <div className="flex justify-between w-3/4">
//             <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Total pembayaran</h3>
//             <h3 className="text-xs sm:text-sm md:text-base lg:text-lg">{roomData.harga}</h3>
//           </div>
//           <div className="flex justify-between w-3/4">
//             <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Metode</h3>
//             <h3 className="text-xs sm:text-sm md:text-base lg:text-lg">Bank</h3>
//           </div>
//           <div className="flex justify-between w-3/4">
//             <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Nama bank</h3>
//             <h3 className="text-xs sm:text-sm md:text-base lg:text-lg">{selectedAccount}</h3>
//           </div>
//           <button
//             type="button"
//             className="text-xs sm:text-sm md:text-base lg:text-lg font-bold px-5 py-2 sm:px-8 sm:py-3 md:px-12 lg:px-16 bg-red-600 text-white rounded-xl hover:scale-105 mt-5"
//             onClick={() => {
//               setIsSuccess(!isSuccess);
//               onClose();
//             }}
//           >
//             Lihat Invoice
//           </button>
//         </div>
//       ) : (
//         <form
//           className="flex flex-col items-center h-fit bg-white rounded-xl gap-5 p-2 max-w-sm w-64 sm:max-w-xl sm:w-3/4"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div className="flex justify-between w-3/4 mb-5 relative">
//             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
//               Pilih metode transaksi
//             </h3>
//             <img
//               src="/close.svg"
//               alt="close"
//               className="hover:cursor-pointer hover:scale-105 w-3 h-3 sm:w-5 sm:h-5 absolute left-full mt-2"
//               onClick={onClose}
//             />
//           </div>
//           <div className="flex justify-between w-3/4">
//             <div className="flex gap-3 items-center flex-wrap">
//               <input
//                 type="radio"
//                 value="BRI"
//                 checked={selectedAccount === "BRI"}
//                 onChange={handleAccountChange}
//               />
//               <img src="/bri-logo.svg" alt="bri" className="w-16 sm:w-3/4" />
//             </div>
//             <p className="font-medium text-sm sm:text-base">Rp. 0</p>
//           </div>
//           <div className="flex justify-between w-3/4">
//             <div className="flex gap-3 items-center">
//               <input
//                 type="radio"
//                 value="BCA"
//                 checked={selectedAccount === "BCA"}
//                 onChange={handleAccountChange}
//               />
//               <img src="/bca-logo.svg" alt="bri" className="w-16 sm:w-3/4" />
//             </div>
//             <p className="font-medium text-sm sm:text-base">Rp. 2.500</p>
//           </div>
//           <div className="flex justify-between w-3/4">
//             <div className="flex gap-3 items-center">
//               <input
//                 type="radio"
//                 value="BNI"
//                 checked={selectedAccount === "BNI"}
//                 onChange={handleAccountChange}
//               />
//               <img src="/bni-logo.svg" alt="bri" className="w-16 sm:w-3/4" />
//             </div>
//             <p className="font-medium text-sm sm:text-base">Rp 1.000</p>
//           </div>

//           <button
//             type="submit"
//             className="px-16 py-3 bg-red-600 text-white rounded-xl hover:scale-105 mt-5"
//             onClick={handlePayment}
//           >
//             Pilih
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default PaymentModal;
