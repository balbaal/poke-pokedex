import React, { memo } from "react";

const ColumnFirst = memo((props) => {
  return (
    <div style={props.style} className="bg-light shadow px-3 pt-3">
      {props.children}
    </div>
  );
});

export default ColumnFirst;
