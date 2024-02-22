import { FormEvent, useState } from "react";
import axios from "axios";

const RegisterVenue = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSucessMessage] = useState("");

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsUploading(true);
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    try {
      const response = await axios.post(
        "https://edoroli.vercel.app/api/Provider/venue-register",
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
                  htmlFor="city_name"
                  className="font-bold text-sm sm:text-base md:text-lg"
                >
                  Venue city:
                </label>
                <select
                  name="city_name"
                  // onChange={(e) => {
                  //   setCityName(e.target.value);
                  // }}
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                >
                  <option value="">Choose city</option>
                  <option value="Mataram">Mataram</option>
                  <option value="Lombok Barat">Lombok Barat</option>
                  <option value="Lombok Timur">Lombok Timur</option>
                  <option value="Lombok Tengah">Lombok Tengah</option>
                  <option value="Lombok Utara">Lombok Utara</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nama_venue"
                  className="font-bold text-sm sm:text-base md:text-lg"
                >
                  Venue name:
                </label>
                <input
                  type="text"
                  name="nama_venue"
                  // onChange={(e) => {
                  //   setNamaVenue(e.target.value);
                  // }}
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="alamat_venue"
                  className="font-bold text-sm sm:text-base md:text-lg"
                >
                  Venue address:
                </label>
                <input
                  type="text"
                  name="alamat_venue"
                  // onChange={(e) => {
                  //   setAlamatVenue(e.target.value);
                  // }}
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="penanggung_jawab"
                  className="font-bold text-sm sm:text-base md:text-lg"
                >
                  Venue coordinator:
                </label>
                <input
                  type="text"
                  name="penanggung_jawab"
                  // onChange={(e) => {
                  //   setPenanggungJawab(e.target.value);
                  // }}
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm sm:text-base md:text-lg">
                  Gambar venue
                </label>
                <input
                  type="file"
                  name="gambar_venue"
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                  // className="hidden"
                />
                {/* {selectedFile && (
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {selectedFile.name}
                  </p>
                )} */}
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

export default RegisterVenue;
