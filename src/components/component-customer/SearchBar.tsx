import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (search: string) => {
    const currentPath = router.asPath;

    let pathname = "/customer/venue";

    if (currentPath.includes("/customer/venue")) {
      pathname = currentPath.split("?")[0];
    }

    router.push({
      pathname: pathname,
      query: { search: search },
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(inputValue);
        }}
        className="mt-5 border-2 border-solid rounded-md border-blue-950"
      >
        <div className="flex items-center p-1 sm:p-2 gap-1 sm:gap-2">
          <div className="flex gap-1 bg-gray-200 rounded-lg flex-1 p-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search/Name"
              className="bg-gray-200 rounded-lg text-xs sm:text-sm md:text-base lg:text-xl w-full focus:outline-none text-slate-900"
            />
          </div>
          {/* <div className="flex gap-1 h-8 w-11/12 sm:w-fit bg-gray-200 rounded-lg relative m-1">
            <img
              src="/location.svg"
              alt="location"
              className="absolute top-[6px] ml-3 w-5"
            />
            <input
              type="text"
              placeholder="Location"
              className="bg-gray-200 text-gray-400 pl-10 rounded-lg text-xs sm:text-sm md:text-base"
            />
          </div>
          <div className="flex gap-1 h-8 w-11/12 sm:w-fit bg-gray-200 rounded-lg relative m-1">
            <img
              src="/category.svg"
              alt="category"
              className="absolute top-[6px] ml-3 w-5"
            />
            <input
              type="text"
              placeholder="Category"
              className="bg-gray-200 text-gray-400 pl-10 rounded-lg text-xs sm:text-sm md:text-base"
            />
          </div>
          <div className="flex gap-1 h-8 w-11/12 sm:w-fit bg-gray-200 rounded-lg relative m-1">
            <img
              src="/capacity.svg"
              alt="capacity"
              className="absolute top-[6px] ml-3 w-5"
            />
            <input
              type="text"
              placeholder="Capacity"
              className="bg-gray-200 text-gray-400 pl-10 rounded-lg text-xs sm:text-sm md:text-base"
            />
          </div> */}

          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-800 text-white font-bold px-5 py-2 rounded-md text-xs sm:text-sm md:text-base lg:text-xl"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
