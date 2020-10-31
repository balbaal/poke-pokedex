import React, { memo } from "react";

const Brand = memo((props) => {
  return (
    <img
      alt={props.src}
      src={props.src}
      style={props.style}
      className={["", props.className].join(" ")}
    />
  );
});

export default Brand;
