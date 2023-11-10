import { FormEvent, useState } from "react";

const RegisterVenue = () => {
  const [numberOfRooms, setNumberOfRooms] = useState<number | string>(1);
  const [rooms, setRooms] = useState<JSX.Element[]>([]);

  const addRoomInputs = () => {
    const rooms: JSX.Element[] = [];
    for (let i = 0; i < (numberOfRooms as number); i++) {
      rooms.push(
        <div key={i}>
          <div className="flex flex-col gap-2">
            <label htmlFor={`namaRoom${i}`} className="font-bold">
              Room name {i + 1}:
            </label>
            <input
              type="text"
              name={`namaRoom${i}`}
              className="p-1 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor={`hargaRoom${i}`} className="font-bold">
              Room {i + 1} price/day:
            </label>
            <p className="absolute top-9 left-2">Rp.</p>
            <input
              type="number"
              name={`hargaRoom${i}`}
              className="p-1 pl-8 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor={`kapasitasRoom${i}`} className="font-bold">
              Room {i + 1} capacity:
            </label>
            <p className="absolute left-[88%] top-9">orang</p>
            <input
              type="number"
              name={`kapasitasRoom${i}`}
              className="p-1 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`deskripsiRoom${i}`} className="font-bold">
              Room {i + 1} description:
            </label>
            <textarea
              name={`deskripsiRoom${i}`}
              className="p-1 rounded-lg"
              rows={4}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`gambarRoom${i}`} className="font-bold">
              Room {i + 1} image:
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              name={`gambarRoom${i}`}
              className="p-1 rounded-lg"
            />
          </div>
        </div>
      );
    }
    setRooms(rooms);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData.entries());
    console.log(formDataJSON);
  };

  return (
    <div className="w-full mt-5 bg-gray-300 border-2 border-black rounded-xl">
      <div className="p-5">
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
          <div className="flex gap-10 w-full">
            <div className="flex flex-col gap-5 w-[50%]">
              <div className="flex flex-col gap-2">
                <label htmlFor="kotaVenue" className="font-bold">
                  Venue city:
                </label>
                <select name="kotaVenue" className="p-1 rounded-lg">
                  <option value="">Choose city</option>
                  <option value="Kota Mataram">Mataram</option>
                  <option value="Lombok Barat">Lombok Barat</option>
                  <option value="Lombok Timur">Lombok Timur</option>
                  <option value="Lombok Tengah">Lombok Tengah</option>
                  <option value="Lombok Utara">Lombok Utara</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="namaVenue" className="font-bold">
                  Venue name:
                </label>
                <input
                  type="text"
                  name="venueName"
                  className="p-1 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="alamatVenue" className="font-bold">
                  Venue address:
                </label>
                <input
                  type="text"
                  name="alamatVenue"
                  className="p-1 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="penanggungJawab" className="font-bold">
                  Venue coordinator:
                </label>
                <input
                  type="text"
                  name="penanggungJawab"
                  className="p-1 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="gambarVenue" className="font-bold">
                  Venue image:
                </label>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  name="gambarVenue"
                  className="p-1 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="jumlahRoom" className="font-bold">
                  Number of rooms in venue:
                </label>
                <select
                  name="jumlahRoom"
                  onChange={(e) => setNumberOfRooms(e.target.value)}
                  className="p-1 rounded-lg"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <button
                type="button"
                className="self-center py-3 px-10 bg-blue-950 text-white hover:scale-105 rounded-xl"
                onClick={addRoomInputs}
              >
                Add Rooms
              </button>
            </div>
            <div className="w-[50%] flex flex-col gap-5">
              {rooms.map((input, index) => (
                <div key={index}>{input}</div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="py-3 px-10 text-white bg-co rounded-xl w-3/4 self-center hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterVenue;
