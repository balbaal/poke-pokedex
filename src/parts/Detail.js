import React from "react";
import { GlobalConsumer } from "configs/context";

const Detail = (props) => {
  return (
    <>
      <div className="w-100 shadow shadow-sm p-3 mb-4 bg-white rounded">
        <div
          style={{ marginTop: -120 }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <img
            height="200px"
            className="tada"
            alt={props.state.detail.sprites.front_default}
            src={props.state.detail.sprites.front_default}
          />
          <p className="h3 mb-3 text-capitalize font-weight-bold">
            {props.state.detail.name}
          </p>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="text-center p-1" style={{ flex: 1 }}>
            <h2 className="h5 m-0 text-capitalize font-weight-light">
              {props.state.detail.types.map((item) => item.type.name).join("/")}
            </h2>
            <label className="text-muted">Type</label>
          </div>

          <div className="text-center p-1" style={{ flex: 1 }}>
            <h2 className="h5 m-0 font-weight-light">
              {props.state.detail.weight}
            </h2>
            <label className="text-muted">Weight</label>
          </div>

          <div className="text-center p-1" style={{ flex: 1 }}>
            <h2 className="h5 m-0 font-weight-light">
              {props.state.detail.height}
            </h2>
            <label className="text-muted">Height</label>
          </div>
        </div>
      </div>

      <div className="w-100 shadow shadow-sm p-3 mb-4 bg-white rounded">
        <h1 className="h4 text-secondary">Status</h1>
        <hr />
        {props.state.detail.stats.map((item, i) => (
          <div
            key={`status-${i}`}
            className="text-muted mb-1 d-flex align-items-center justify-content-between"
          >
            <h2 className="h6 text-capitalize">{item.stat.name}</h2>
            <label className="h6">{`${item.effort}/${item.base_stat}`}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default GlobalConsumer(Detail);
