import React from "react";
import "../styles/components/picture.scss";

export default function Picture({ data }) {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imgContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Download
        <a href={data.src.large} target="_blank" rel="noopener noreferrer">
          Here
        </a>
      </p>
    </div>
  );
}
