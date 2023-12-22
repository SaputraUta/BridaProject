import { FormEvent, useState } from "react";
import axios from "axios";

const RegisterVenue = () => {
  const [file, setFile] = useState<File>();

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(file);
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    const response = await axios.post(
      "http://localhost:3000/api/Provider/venue-register",
      formDataJSON
    );
    console.log(response);
  }

  return (
    <div className="mt-5 bg-gray-300 border-2 border-black rounded-xl">
      <div className="p-5">
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
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
                  className="p-1 rounded-lg text-xs sm:text-sm md:text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="cursor-pointer bg-blue-950 text-white p-2 rounded-md hover:bg-blue-900 font-semibold text-xs sm:text-sm md:text-base">
                  Select venue image
                  <input
                    type="file"
                    name="gambar_venue"
                    accept="image/*"
                    onChange={(e) => {
                      setFile(e.target.files?.[0]);
                    }}
                    className="hidden"
                  />
                </label>
                {file && (
                  <p className="text-xs sm:text-sm md:text-base">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
            </div>
          </div>
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
