interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Berita 1",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    imageUrl: "/placeholderallstay.jpg",
  },
  {
    id: 2,
    title: "Berita 2",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    imageUrl: "/placeholderallstay2.jpg",
  },
  {
    id: 3,
    title: "Berita 3",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    imageUrl: "/placeholderallstay3.jpg",
  },
];

const EventNews = () => {
  return (
    <div className="mt-10 w-full">
      <h1 className='text-5xl font-bold'>Event News</h1>
      <div className="mt-5 grid grid-cols-3 gap-8">
        {newsData.map((item, index) => (
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventNews;
