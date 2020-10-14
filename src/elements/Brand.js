import React from "react";

const Brand = (props) => {
  return (
    <img
      src={props.src}
      style={props.style}
      className={["", props.className].join(" ")}
    />
  );
};

export default Brand;
