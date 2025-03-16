// src/components/MessageDisplay.js
import React from "react";
import { useSelector } from "react-redux";
import { selectCounterValue } from "../store";

const MessageDisplay = () => {
  const count = useSelector(selectCounterValue);

  let message = "Keep going!";
  if (count > 10) {
    message = "Great job!";
  } else if (count < 0) {
    message = "Try to get positive!";
  }

  return (
    <div className="p-4 bg-green-50 rounded shadow">
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default MessageDisplay;
