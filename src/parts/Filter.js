import React, { useState } from "react";

// Component
import { Input } from "elements";

const Filter = () => {
  const optionsPokemon = [
    { value: "Chocolate", label: "Chocolate" },
    { value: "Strawberry", label: "Strawberry" },
  ];

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="filter-nav">
      <Input
        type="select"
        placeholder="Name"
        options={optionsPokemon}
        value={selectedPokemon}
        onChange={(selectedOption) => setSelectedPokemon(selectedOption)}
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

export default Filter;
