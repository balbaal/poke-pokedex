import React from "react";

const StatusPage = (props) => {
  return (
    <div
      style={props.style}
      className="tada d-flex align-items-center text-center flex-column justify-content-center"
    >
      <img className="w-100" src={props.src} alt={props.alt} />
      <h1 className="text-secondary h4 font-weight-light mt-4">
        {props.title}
      </h1>
    </div>
  );
};

export default StatusPage;
