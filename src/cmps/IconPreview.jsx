import React from "react";
import { Link } from "react-router-dom";

function IconPreview({ txt, url, iconImgUrl }) {
  return (
    <div className="card-icon">
      <Link to={url}>
        <div className="imge"> {<img src={iconImgUrl} />}</div>
        <div className="line"></div>
        <p>{txt}</p>
      </Link>
    </div>
  );
}

export default IconPreview;
