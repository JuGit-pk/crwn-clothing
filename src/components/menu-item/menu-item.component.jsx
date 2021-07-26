import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, size, imageUrl }) => {
  return (
    <div className={`menu-item ${size}`}>
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
export default MenuItem;