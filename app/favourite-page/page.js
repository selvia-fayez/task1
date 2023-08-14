"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/style.module.scss";
import { FaHeart } from "react-icons/fa";
import UserInfo from "../UserInfo/page";
import PostImage from "../PostImage/page";
import PostInfo from "../PostInfo/page";
import FavPostImage from "../FavPostImage/page";

export default function page() {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const oldFavList = localStorage.getItem("favourites");
    if (oldFavList) {
      setFavourite(JSON.parse(oldFavList));
    }
  }, []);
  const Remove = (removePost) => {
    const newFavourite = favourite.filter((post) => post !== removePost);
    setFavourite(newFavourite);
    localStorage.setItem("favourites", JSON.stringify(newFavourite));
  };
  return (
    <div className={style.container}>
      <h3>Your Favourite Posts</h3>
      {favourite.map((Post, i) => (
        <div key={i} className={style.post}>
          <div className={style.userInfo}>
            <UserInfo key={i} Post={Post} />
          </div>
          <div className={style.postInfo}>
            <img src={Post.Photo} />
            <i onClick={() => Remove(Post)} className={style.remove}>
              <FaHeart />
            </i>
            {/* <PostImage key={i} Post={Post} homePage={false} /> */}
            {/* <FavPostImage key={i} Post={Post} /> */}
            <PostInfo key={i} Post={Post} />
          </div>
        </div>
      ))}
    </div>
  );
}
