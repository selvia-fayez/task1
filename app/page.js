"use client";

import Posts from "./data";
import style from "./styles/style.module.scss";
import UserInfo from "./UserInfo/page";
import PostImage from "./PostImage/page";
import PostInfo from "./PostInfo/page";

export default function Home() {
  return (
    <div className={style.container}>
      {Posts.map((Post, i) => (
        <div key={i} className={style.post}>
          <div className={style.userInfo}>
            <UserInfo key={i} Post={Post} />
          </div>
          <div className={style.postInfo}>
            <PostImage key={i} Post={Post} homePage={true} />
            <PostInfo key={i} Post={Post} />
          </div>
        </div>
      ))}
    </div>
  );
}
// change data -> donee
// remove scroll x-axis and margin right or make posts in center -> donee
// cant add to fav twice
// handle remove from favoruite -> donee
// error in console
