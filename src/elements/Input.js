import React from "react";
import Select from "react-select";

const Input = (props) => {
  if (props.type === "select") {
    return (
      <Select
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        options={props.options}
      />
    );
  }

  return (
    <input
      placeholder={props.placeholder}
      type="text"
      value={props.value}
      onChange={props.onChange}
      className={["form-control", props.className].join(" ")}
    />
  );
};

export default Input;
