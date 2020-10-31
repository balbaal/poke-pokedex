import React, { useCallback, memo } from "react";
import { GlobalConsumer } from "configs/context";

// Component
import { Input } from "elements";

const Filter = memo((props) => {
  const __handleFilterType = useCallback((selectedOption) => {
    props.dispatch({
      type: "FILTER_TYPE",
      payload: selectedOption,
    });
  }, []);

  const __handleFilterName = useCallback(
    (e) => props.dispatch({ type: "FILTER_NAME", payload: e.target.value }),
    []
  );

  const __handleFilterAbility = useCallback((selectedOption) => {
    props.dispatch({
      type: "FILTER_ABILITY",
      payload: selectedOption,
    });
  }, []);

  return (
    <div className={["filter-nav", props.className].join(" ")}>
      <Input
        placeholder="Name"
        value={props.state.filter.name}
        onChange={__handleFilterName}
      />
      <Input
        type="select"
        placeholder="Type"
        options={props.state.optionsType}
        value={props.state.filter.type}
        onChange={__handleFilterType}
      />
      <Input
        type="select"
        placeholder="Ability"
        options={props.state.optionsAbility}
        value={props.state.filter.ability}
        onChange={__handleFilterAbility}
      />
    </div>
  );
});

export default GlobalConsumer(Filter);
