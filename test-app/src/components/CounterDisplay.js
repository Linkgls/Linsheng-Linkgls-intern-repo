// src/components/CounterDisplay.js
import React from "react";
import { useSelector } from "react-redux";
import { selectCounterValue } from "../store";

const CounterDisplay = () => {
  const count = useSelector(selectCounterValue);

  return (
    <div className="p-4 bg-blue-50 rounded shadow mb-4">
      <h2 className="text-xl font-semibold">Current Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
