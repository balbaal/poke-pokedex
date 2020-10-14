import React from "react";

// Component
import { Brand } from "elements";
import { Filter } from "parts";

const ColumnFirst = () => {
  return (
    <div className="bg-light shadow vh-100">
      <Brand style={{ width: 150 }} src="/images/pokemon_logo.png" />
      <Filter />
    </div>
  );
};

export default ColumnFirst;
