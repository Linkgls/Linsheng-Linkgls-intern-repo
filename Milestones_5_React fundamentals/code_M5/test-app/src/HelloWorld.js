// src/HelloWorld.js
import React from "react";
import PropTypes from "prop-types";

const HelloWorld = ({ name }) => {
  return (
    <div className="p-4">
      <h1>Hello, Focus Bear!</h1>
      <p>Welcome, {name}!</p>
    </div>
  );
};

HelloWorld.propTypes = {
  name: PropTypes.string,
};

HelloWorld.defaultProps = {
  name: "Guest",
};

export default HelloWorld;
