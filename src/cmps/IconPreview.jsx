import React from "react";
import { Link } from "react-router-dom";

function IconPreview({ txt, url, iconImgUrl }) {
  return (
    <div className="card">
      <Link className="card-link" to={url}>
        <h3>{txt}</h3>
        <img src={iconImgUrl} />
      </Link>
    </div>
  );
}

export default IconPreview;
