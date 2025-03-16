// src/components/Counter.js
// import React, { useState } from "react";
// import Button from "./Button";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="max-w-sm mx-auto p-4 bg-gray-100 rounded shadow">
//       <h1 className="text-2xl font-bold text-center mb-4">Counter</h1>
//       <p className="text-center text-xl mb-4">{count}</p>
//       <div className="flex justify-center space-x-4">
//         <Button
//           onClick={() => setCount(count + 1)}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition"
//         >
//           Increase
//         </Button>
//         <Button
//           onClick={() => setCount(count - 1)}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 transition"
//         >
//           Decrease
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Counter;

// Refactor after Redux
// src/components/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store";

const Counter = () => {
  // Get the current counter value from the Redux store
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm mx-auto p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Redux Counter</h1>
      <p className="text-center text-xl mb-4">{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 active:bg-red-700 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
