import React from "react";

const Table = (props) => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Ability</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => {
          const types = item.types.map((type) => type.type.name);
          const abilities = item.abilities.map(
            (ability) => ability.ability.name
          );

          return (
            <tr>
              <th scope="row">{i + 1}</th>
              <td className="text-capitalize">{item.name}</td>
              <td>{types.join(", ")}</td>
              <td>{abilities.join(", ")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
