import React, { useEffect, useState } from "react";
import style from "../styles/style.module.scss";
import { FaHeart } from "react-icons/fa";

export default function page({ Post }) {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const oldFavList = JSON.parse(window.localStorage.getItem("favourites"));
    console.log(oldFavList);
    if (oldFavList) {
      setFavourite(oldFavList);
      console.log(favourite);
    }
  }, []);
  const Remove = (removePost) => {
    const newFavourite = favourite.filter((post) => post !== removePost);
    setFavourite(newFavourite);
    window.localStorage.setItem("favourites", JSON.stringify(newFavourite));
  };
  return (
    <>
      <img src={Post.Photo} />
      <i onClick={() => Remove(Post)} className={style.remove}>
        <FaHeart />
      </i>
    </>
  );
}
