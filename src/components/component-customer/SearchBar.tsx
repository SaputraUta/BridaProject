import Image from "next/image";

const SearchBar = () => {
  return (
    <div>
      <div className="mx-[100px] max-w-[1440px] w-[1080px]">
        <form
          action=""
          className="flex justify-around mt-12 gap-14 w-full border border-solid rounded-md border-blue-950"
        >
          <div className="flex gap-1 bg-gray-200 w-[180px] h-[50px] border-none rounded-lg ml-2 my-2">
            <Image src="/search.svg" alt="search" width={24} height={24} />
            <input
              type="text"
              placeholder="Search/Name"
              className="bg-gray-200 text-gray-400"
            />
          </div>
          <div className="flex gap-1 bg-gray-200 w-[180px] h-[50px] border-none rounded-lg my-2">
            <Image src="/location.svg" alt="location" width={24} height={24} />
            <input
              type="text"
              placeholder="Location"
              className="bg-gray-200 text-gray-400"
            />
          </div>
          <div className="flex gap-1 bg-gray-200 w-[180px] h-[50px] border-none rounded-lg my-2">
            <Image src="/category.svg" alt="category" width={24} height={24} />
            <input
              type="text"
              placeholder="Category"
              className="bg-gray-200 text-gray-400"
            />
          </div>
          <div className="flex gap-1 bg-gray-200 w-[180px] h-[50px] border-none rounded-lg my-2">
            <Image src="/capacity.svg" alt="capacity" width={24} height={24} />
            <input
              type="text"
              placeholder="Capacity"
              className="bg-gray-200 text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-950 hover:scale-105 text-white text-xl font-bold p-3 my-0 w-full rounded-md"
          >
            Search
          </button>
        </form>
      </div>
      <div className="mt-5 border-b border w-[1080px] mx-[100px] border-blue-950"/>
    </div>
  );
};

export default SearchBar;
