import React from "react";

interface set{
  title:string
}

const Heading = ({ title }:set) => {
  return (
    <div className="heading-container">
      <h1 className="heading-title">{title}</h1>
      <div className="heading-line"></div>
    </div>
  );
};

export default Heading;
