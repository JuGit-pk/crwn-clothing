import React from "react";
import "./menu-item.styles.scss";

import { withRouter } from "react-router";

const MenuItem = ({ title, size, imageUrl, linkUrl, history, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
