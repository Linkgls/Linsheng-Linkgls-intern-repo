# React Fundamentals

## Navigation with React Router

## Code for React Router

```javascript
// src/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page.</p>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default Home;

// src/Profile.js
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is your profile.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Profile;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Test from "./Test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

```

## Reflection about ReactRouting

- **What are the advantages of client-side routing?**
  - Smooth Navigation:
    Updates the view without full page reloads, avoiding re-downloading assets (HTML/CSS/JS).
  - State Preservation:
    Preserves component state (e.g., form inputs, UI state) during navigation.
  - Reduced Server Load:
    Routes handled by the client (e.g., React Router, Vue Router) reduce server requests after initial load.

---

## Working with Lists & User Input

## Code for dynamic list

```javascript
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
```

## Reflection about List & User input

- **What are some common issues when working with lists in React?**
  - Key Prop Issues
    Missing or duplicate keys cause React to misidentify list items, leading to rendering bugs (e.g., incorrect item updates).
  - State Management
    Mutating state directly (e.g., push, splice) prevents React from detecting changes, causing stale UI.
  - Re-rendering Problems
    Parent state updates force full list re-renders. Mitigate with React.memo or useMemo.
