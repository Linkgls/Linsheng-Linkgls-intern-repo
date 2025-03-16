// src/components/Counter.js
import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-sm mx-auto p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-4">Counter</h1>
      <p className="text-center text-xl mb-4">{count}</p>
      <div className="flex justify-center space-x-4">
        <Button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition"
        >
          Increase
        </Button>
        <Button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 transition"
        >
          Decrease
        </Button>
      </div>
    </div>
  );
};

export default Counter;
