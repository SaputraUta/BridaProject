import NavUser from "@/components/component-customer/NavUser";
import LayoutCustomer from "@/layout/layout-customer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

export default function news() {
  const router = useRouter();
  const [data, setData] = useState<NewsItem[]>();
  const [isLoading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState<NewsItem>();
  const [recommendedNews, setRecommendedNews] = useState<NewsItem[]>();

  useEffect(() => {
    fetch("https://mocki.io/v1/1a27da3b-7d9c-4af1-9873-a5e529d88775")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    const id = router.query.id as string;
    const getData = data?.find((item) => item.id === parseInt(id));
    setNewsData(getData);

    const getRecommendedNews = data?.filter((item) => item.id !== newsData?.id);
    setRecommendedNews(getRecommendedNews);
  }, [router, data]);
  if (!data)
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
    <LayoutCustomer>
      <div className="mx-24 mt-32">
        <NavUser />

        <div className="flex gap-5 mt-3">
          <div className="w-[70%] border-r-2">
            <div className="p-5">
              <h2 className="text-4xl font-bold">{newsData?.title}</h2>
              <h4 className="text-lg opacity-50">Monday 27 February 2024</h4>
              {newsData ? (
                <img src={newsData.imageUrl} />
              ) : (
                <p className="font-bold text-lg text-center">
                  {" "}
                  No Image Found{" "}
                </p>
              )}
              <p className="mt-5 text-sm">
                {newsData?.content} Turnamen Mobile Legends Memeriahkan Kafe
                Gamer Kota Ini! Kota ini tengah bergairah dengan turnamen Mobile
                Legends terbesar yang pernah ada. Menyatukan gamer dari berbagai
                kalangan, turnamen ini telah mengubah pandangan tentang e-sport
                dalam waktu singkat. Turnamen Mobile Legends yang diadakan di
                Kafe Gamer terkemuka di kota telah menjadi pusat perhatian,
                mengundang ribuan pemain dan penggemar untuk bersatu dalam
                persaingan sengit. Ajang Persaingan yang Penuh Antusiasme
                Turnamen Mobile Legends ini memberikan wadah bagi para pemain,
                baik yang berpengalaman maupun yang baru memulai, untuk
                menunjukkan keahlian mereka dalam kompetisi yang diselenggarakan
                dengan sangat serius. Setiap tim telah berlatih keras dan
                memiliki strategi khusus untuk memenangkan gelar juara. Dari
                pertandingan sengit hingga comeback yang mengejutkan, kompetisi
                ini memacu adrenalin pemain dan penonton. Kolaborasi yang
                Menyatu Salah satu hal yang membuat turnamen ini istimewa adalah
                semangat kolaborasi yang menyatu di antara peserta. Tim-tim
                saling mendukung dan belajar satu sama lain, menjadikan suasana
                persaingan penuh semangat sportif. Inilah yang membedakan
                e-sport dari olahraga lainnya; tidak hanya tentang memenangkan,
                tetapi juga tentang bersenang-senang dan tumbuh bersama.
                Menghadirkan Pengalaman Gaming Terbaik Kafe Gamer sebagai tuan
                rumah telah membuat semua pemain dan penggemar merasa seperti di
                rumah mereka sendiri. Dengan fasilitas gaming terbaik dan
                suasana yang mendukung, para peserta dapat menikmati pengalaman
                bermain game yang tak terlupakan. Turnamen ini telah
                mengingatkan kita semua akan kekuatan video game untuk
                menghubungkan orang dan menciptakan kenangan bersama. Momentum
                untuk E-Sport Lokal Turnamen Mobile Legends ini telah
                membuktikan bahwa e-sport lokal memiliki masa depan yang cerah.
                Semakin banyak pemain dan komunitas yang terlibat dalam e-sport,
                semakin besar potensi pertumbuhan industri ini. Kafe Gamer telah
                menjadi model bagaimana kolaborasi antara komunitas gamer dan
                tempat gaming dapat menciptakan peristiwa besar yang
                mempromosikan e-sport lokal. Kami tak sabar untuk melihat apa
                yang akan datang selanjutnya! Turnamen Mobile Legends
                Memeriahkan Kafe Gamer Kota Ini! Kota ini tengah bergairah
                dengan turnamen Mobile Legends terbesar yang pernah ada.
                Menyatukan gamer dari berbagai kalangan, turnamen ini telah
                mengubah pandangan tentang e-sport dalam waktu singkat. Turnamen
                Mobile Legends yang diadakan di Kafe Gamer terkemuka di kota
                telah menjadi pusat perhatian, mengundang ribuan pemain dan
                penggemar untuk bersatu dalam persaingan sengit. Ajang
                Persaingan yang Penuh Antusiasme Turnamen Mobile Legends ini
                memberikan wadah bagi para pemain, baik yang berpengalaman
                maupun yang baru memulai, untuk menunjukkan keahlian mereka
                dalam kompetisi yang diselenggarakan dengan sangat serius.
                Setiap tim telah berlatih keras dan memiliki strategi khusus
                untuk memenangkan gelar juara. Dari pertandingan sengit hingga
                comeback yang mengejutkan, kompetisi ini memacu adrenalin pemain
                dan penonton. Kolaborasi yang Menyatu apa yang akan datang
                selanjutnya!
              </p>
            </div>
          </div>
          <div className="mt-8 relative opacity-60 w-[30%]">
            <h3 className="text-xl font-bold">Rekomendasi berita lainnya</h3>
            {recommendedNews?.map((item) => (
              <div key={item.id}>
                <Link href={`/customer/news/${item.id}`}>
                  <h4 className=" text-blue-400 font-medium">{item.title}</h4>
                  <img src={item.imageUrl} alt="" className=" w-10/12" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
    </LayoutCustomer>
  );
}
