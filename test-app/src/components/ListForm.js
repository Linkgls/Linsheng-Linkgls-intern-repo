// src/components/ListForm.js
import React, { useState } from "react";

const ListForm = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (input.trim() !== "") {
      // add the input to the list
      setList([...list, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Dynamic List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((item, index) => (
          // use index as key only for simple lists without sorting or deleting
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListForm;
