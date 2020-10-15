import React from "react";
import { GlobalConsumer } from "configs/context";

// Component
import { Input } from "elements";

const Filter = (props) => {
  return (
    <div className={["filter-nav", props.className].join(" ")}>
      <Input
        placeholder="Name"
        value={props.state.filter.name}
        onChange={(e) =>
          props.dispatch({ type: "FILTER_NAME", payload: e.target.value })
        }
      />
      <Input
        type="select"
        placeholder="Type"
        options={props.state.optionsType}
        value={props.state.filter.type}
        onChange={(selectedOption) => {
          props.dispatch({
            type: "FILTER_TYPE",
            payload: selectedOption,
          });
        }}
      />
      <Input
        type="select"
        placeholder="Ability"
        options={props.state.optionsAbility}
        value={props.state.filter.ability}
        onChange={(selectedOption) => {
          props.dispatch({
            type: "FILTER_ABILITY",
            payload: selectedOption,
          });
        }}
      />
    </div>
  );
};

export default GlobalConsumer(Filter);
