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
        className="flex justify-center flex-wrap mt-5 border-2 border-solid rounded-md border-blue-950"
      >
        <div className="flex gap-1 h-8 w-11/12 bg-gray-200 rounded-lg relative m-2">
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
        <div className="flex gap-1 h-8 w-11/12 bg-gray-200 rounded-lg relative mb-2">
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
        <div className="flex gap-1 h-8 w-11/12 bg-gray-200 rounded-lg relative mb-2">
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
        <div className="flex gap-1 h-8 w-11/12 bg-gray-200 rounded-lg relative mb-2">
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
          className="bg-blue-950 hover:scale-105 text-white font-bold p-3 my-0 rounded-md col-span-full mb-2 mx-2 w-11/12 text-xs sm:text-sm md:text-base lg:text-xl"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
