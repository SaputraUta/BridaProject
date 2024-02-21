/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const EventNews = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const currentPath = router.asPath;
  useEffect(() => {
    fetch("https://mocki.io/v1/1a27da3b-7d9c-4af1-9873-a5e529d88775")
      .then((res) => res.json())
      .then((data) => {
        setNewsData(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <p className="text-center">Loading news...</p>;
  if (!newsData)
    return (
      <div className="flex justify-center items-center">
        <p className="font-bold text-lg">No data found</p>
      </div>
    );
  return (
    <div className="w-full">
      <h1 className="text-lg sm:text-xl md:text-2xl mt-10 font-bold lg:text-3xl text-slate-900">
        Event News
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 md:gap-4 lg:gap-8 mt-2 sm:mt-4">
        {newsData.map((item) =>
          currentPath.includes("/customer") ? (
            <Link
              href={`/customer/news/${item.id}`}
              key={item.id}
              className="border-2 rounded-xl hover:cursor-pointer hover:scale-105"
            >
              <div className="p-1">
                <img src={item.imageUrl} alt={item.title} />
                <div className="p-1">
                  <h2 className="font-bold text-sm sm:text-base md:text-lg truncate">
                    {item.title}
                  </h2>
                  <p className="truncate max-h-32 text-xs sm:text-sm md:text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              href="/login"
              key={item.id}
              className="border-2 rounded-xl hover:cursor-pointer hover:scale-105"
            >
              <div className="p-1">
                <img src={item.imageUrl} alt={item.title} />
                <div className="p-1">
                  <h2 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl truncate">
                    {item.title}
                  </h2>
                  <p className="truncate max-h-32 text-xs sm:text-sm md:text-base lg:text-lg">
                    {item.content}
                  </p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default EventNews;
