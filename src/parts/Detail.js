import React from "react";
import { GlobalConsumer } from "configs/context";

const Detail = (props) => {
  console.log(props.state);
  return <div>{props.state.detail.name}</div>;
};

export default GlobalConsumer(Detail);
