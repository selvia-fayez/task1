import React from "react";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import style from "../styles/style.module.scss";

export default function page({ Post, homePage }) {
  const [favourite, setFavourite] = useState([]);
  const addFavourite = (post) => {
    const index = favourite.indexOf(post);
    //when find the post in favourite list -> remove it, otherwise add it to the list
    if (index > -1) {
      Remove(post);
    } else {
      const newFavourite = [...favourite, post];
      setFavourite(newFavourite);
      window.localStorage.setItem("favourites", JSON.stringify(newFavourite));
    }
  };
  const Remove = (removePost) => {
    const newFavourite = favourite.filter((post) => post !== removePost);
    setFavourite(newFavourite);
    window.localStorage.setItem("favourites", JSON.stringify(newFavourite));
  };
  useEffect(() => {
    const oldFavList = window.localStorage.getItem("favourites");
    if (oldFavList) {
      setFavourite(JSON.parse(oldFavList));
    }
  }, []);
  return (
    <>
      <img src={Post.Photo} />
      {homePage ? (
        <>
          <i onClick={() => addFavourite(Post)}>
            {favourite.indexOf(Post) > -1 ? <FaHeart /> : <FaRegHeart />}
          </i>
        </>
      ) : (
        <i onClick={() => Remove(Post)} className={style.remove}>
          <FaHeart />
        </i>
      )}
    </>
  );
}
