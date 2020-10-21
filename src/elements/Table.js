import React from "react";
import { GlobalConsumer } from "configs/context";

const Table = (props) => {
  return (
    <table className="table table-hover table-pokemon">
      <thead>
        <tr>
          <th className="text-center" scope="col">
            #
          </th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Ability</th>
        </tr>
      </thead>
      <tbody className="table-pokemon__body">
        {props.data.map((item, i) => {
          const types = item.types.map((type, i) => type.type.name);
          const abilities = item.abilities.map(
            (ability) => ability.ability.name
          );

          return (
            <tr
              className="table-pokemon__body__row"
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() =>
                props.dispatch({ type: "FETCH_DETAIL", payload: item })
              }
            >
              <th className="text-center" scope="row">
                {i + 1}
              </th>
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

export default GlobalConsumer(Table);
