import React from "react";

const ColumnFirst = (props) => {
  return (
    <div style={props.style} className="bg-light shadow px-3 pt-3">
      {props.children}
    </div>
  );
};

export default ColumnFirst;
