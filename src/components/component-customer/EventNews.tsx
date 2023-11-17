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
  if (!newsData)
    return (
      <div className="flex justify-center items-center">
        <p className="font-bold text-lg">No data found</p>
      </div>
    );
  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <p className="font-bold text-lg">Loading</p>
      </div>
    );
  return (
    <div className="mt-10 w-full">
      <h1 className="text-5xl font-bold">Event News</h1>
      <div className="mt-5 grid grid-cols-3 gap-8">
        {newsData.map((item) =>
          currentPath.includes("/customer") ? (
            <Link
              href={`/customer/news/${item.id}`}
              key={item.id}
              className="border-2 rounded-xl hover:cursor-pointer hover:scale-105"
            >
              <div className="p-2">
                <img src={item.imageUrl} alt={item.title} />
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p>
                  {item.content.length > 200
                    ? item.content.slice(0, 200) + "..."
                    : item.content}
                </p>
              </div>
            </Link>
          ) : (
            <Link
              href="/login"
              key={item.id}
              className="border-2 rounded-xl hover:cursor-pointer hover:scale-105"
            >
              <div className="p-2">
                <img src={item.imageUrl} alt={item.title} />
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p>
                  {item.content.length > 200
                    ? item.content.slice(0, 200) + "..."
                    : item.content}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default EventNews;
