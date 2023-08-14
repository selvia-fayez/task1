import React from "react";

export default function page({ Post }) {
  return (
    <>
      <img src={Post.userPhoto} />
      <p>{Post.userName}</p>
    </>
  );
}
