import { useEffect, useState } from "react";
import AOS from "aos";
import Head from "next/head";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://newsapi.org/v2/everything?q=covid&from=2022-02-21&sortBy=publishedAt&apiKey=aafa85ffd7a94303a9437e76c816b423",
        {
          method: "GET",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res.articles);
          setNews(res.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  console.log(news);

  return (
    <>
      <Head>
        <title>Interview Eric Fernando</title>
        <meta property="og:image" content="https://imageurlkalian" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <>
        {news &&
          news.map((item, idx) => {
            return (
              <div className="body-blog" key={idx}>
                <div className="blog-post">
                  <div className="blog-post-img">
                    {item.urlToImage ? (
                      <img src={item.urlToImage} className="card-img" />
                    ) : (
                      <img src="/img/404-1.png" className="card-img" />
                    )}
                  </div>
                  <div className="blog-post-info">
                    <h1 className="blog-post-title">{item.title}</h1>
                    <p className="blog-post-desc">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </>
      <Footer />
    </>
  );
}
