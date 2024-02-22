import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const RegisterRoom = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSucessMessage] = useState("");
  const router = useRouter();
  const venue_id = router.query.venue_id as string;

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsUploading(true);
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    try {
      const response = await axios.post(
        `https://edoroli.vercel.app/api/Provider/rooms?venue_id=${venue_id}`,
        formData
      );
      formElement.reset();
      if (response.status === 200) setSucessMessage("Data berhasil disimpan");
      else if (response.status === 403)
        setErrorMessage("Validation error. Please check your inputs.");
      else if (response.status === 500)
        setErrorMessage("Server error. Please try again later.");
    } catch (e) {
      console.error(e);
    } finally {
      setIsUploading(false);
    }
  }
  return (
    <div className="mt-5 bg-gray-300 border-2 border-black rounded-xl">
      <div className="p-5">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-5"
          encType="multipart/form-data"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nama_room"
                  className="font-bold text-sm sm:text-base md:text-lg"
                >
                  Room name:
                </label>
                <input
                  type="text"
                  name="nama_room"
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="kapasitas"
                  className="font-bold text-sm sm:text-base md:text-lg"
                >
                  Room capacity:
                </label>
                <input
                  type="text"
                  name="kapasitas"
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="harga_room"
                  className="font-bold text-sm sm:text-base md:text-lg"
                >
                  Room price/day:
                </label>
                <input
                  type="text"
                  name="harga_room"
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm sm:text-base md:text-lg">
                  Room image
                </label>
                <input
                  type="file"
                  name="gambar_room"
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                  // className="hidden"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="desc_room"
                  className="font-bold text-sm sm:text-base md:text-lg"
                >
                  Room descripion:
                </label>
                <input
                  name="desc_room"
                  type="text"
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                />
              </div>
            </div>
          </div>
          {isUploading && (
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-2 border-r-2 border-blue-950 border-solid rounded-full animate-spin" />
              <span className="px-2">
                <p className="text-xs sm:text-sm md:text-base text-slate-800">
                  Registering
                </p>
              </span>
            </div>
          )}
          {errorMessage && (
            <p className="sm:text-sm md:text-base text-red-500 text-center p-1">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="sm:text-sm md:text-base text-green-500 text-center p-1">
              {successMessage}
            </p>
          )}
          <button
            type="submit"
            className="py-3 px-10 text-white bg-co rounded-xl w-11/12 self-center hover:scale-105 text-sm sm:text-base md:text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterRoom;
