import React from "react";
import { Link } from "react-router-dom";

function CardPreview({ subTitle, title, url, backgroundImgUrl }) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${backgroundImgUrl})` }}
    >
      <div className="cards-cover"></div>
      <Link className="card-link" to={url}>
        <h4>
          <small>{subTitle}</small>
          {title}
        </h4>
      </Link>
    </div>
  );
}

export default CardPreview;
