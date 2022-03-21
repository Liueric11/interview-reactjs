import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Image from "next/dist/client/image";

interface CardTypes {
  data?: [
    {
      source?: {
        id?: string;
        name?: string;
      };
      author?: string;
      title?: string;
      description?: string;
      urlToImage?: string;
      publishedAt?: string;
      content?: string;
    }
  ];
}

export default function Card(props: CardTypes) {
  const { data } = props;
  return (
    <>
      <div className="body-blog">
        <div className="blog-post">
          <div className="blog-post-img">
            <img src="/img/foto.jpg" className="card-img" />
          </div>
          <div className="blog-post-info">
            <h1 className="blog-post-title">Shark Sighting</h1>
            <p className="blog-post-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
              accusamus inventore quisquam sint possimus officia?
            </p>
            <a href="#" className="blog-post-cta">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
