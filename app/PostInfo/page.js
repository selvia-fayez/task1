import React from "react";
import { FaHeart } from "react-icons/fa";
import style from "../styles/style.module.scss";

export default function page({ Post }) {
  return (
    <>
      <p className={style.likes}>
        <FaHeart /> {Post.noOfLikes} likes
      </p>
      <p className={style.caption}>{Post.caption}</p>
      <p>{Post.hashTags}</p>
      <p className={style.comments}>View {Post.noOfComments} comments</p>
    </>
  );
}
