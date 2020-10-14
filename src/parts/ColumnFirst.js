import React from "react";

// Component
import { Brand, StatusPage } from "elements";
import { Filter } from "parts";

const ColumnFirst = () => {
  return (
    <div className="bg-light shadow vh-100 p-3">
      <Brand style={{ width: 150 }} src="/images/pokemon_logo.png" />
      <Filter className="mt-4" />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <StatusPage
          src="/images/pokemon_logo.png"
          title="Oops! No pokemon found!"
          style={{ width: "200px" }}
        />
      </div>
    </div>
  );
};

export default ColumnFirst;
