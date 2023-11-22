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
        className="mt-5 border-2 border-solid rounded-md border-blue-950  sm:max-w-2xl md:max-w-4xl lg:max-w-6xl"
      >
        <div className="flex justify-center items-center flex-wrap sm:justify-between sm:items-center p-2">
          <div className="flex gap-1 h-8 w-11/12 sm:w-fit bg-gray-200 rounded-lg relative m-1">
            <img
              src="/search.svg"
              alt="search"
              className="absolute top-[6px] ml-3 w-5"
            />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search/Name"
              className="bg-gray-200 text-gray-400 pl-10 rounded-lg text-xs sm:text-sm md:text-base"
            />
          </div>
          <div className="flex gap-1 h-8 w-11/12 sm:w-fit bg-gray-200 rounded-lg relative m-1">
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
          </div>

          <button
            type="submit"
            className="bg-blue-950 hover:scale-105 text-white font-bold p-3 rounded-md mt-2 w-11/12 text-xs sm:text-sm md:text-base lg:text-xl cols sm:w-full"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
