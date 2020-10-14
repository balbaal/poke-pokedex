import React, { useState } from "react";
import { GlobalConsumer } from "configs/context";

// Component
import { Input } from "elements";

const Filter = (props) => {
  const optionsPokemon = [
    { value: "Chocolate", label: "Chocolate" },
    { value: "Strawberry", label: "Strawberry" },
  ];

  const [searchPokemon, setSearchPokemon] = useState("");

  const [selectedPokemon, setSelectedPokemon] = useState(null);

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
        options={optionsPokemon}
        value={null}
        onChange={(selectedOption) => {}}
      />
      <Input
        type="select"
        placeholder="Ability"
        options={optionsPokemon}
        value={null}
        onChange={(selectedOption) => {}}
      />
    </div>
  );
};

export default GlobalConsumer(Filter);
