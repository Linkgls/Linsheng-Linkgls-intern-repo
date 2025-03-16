// src/components/MessageComponent.js
import React, { useState } from "react";

function MessageComponent() {
  const [message, setMessage] = useState("Hello, Focus Bear!");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setMessage("Button was clicked!");
  };

  return (
    <div className="p-4 bg-gray-50 rounded shadow-md">
      <p className="text-xl mb-4">{message}</p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition"
      >
        Click Me
      </button>
      {clicked && (
        <p data-testid="clicked-message" className="text-green-700 mt-4">
          You clicked the button!
        </p>
      )}
    </div>
  );
}

export default MessageComponent;
