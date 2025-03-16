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

---

## Styling with Tailwind CSS

## Code of Tailwind CSS

```javascript
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

// src/components/Button.js
import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 active:bg-green-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

```

## Reflections about Tailwind CSS

- **What are the advantages of using Tailwind CSS?**
  - Tailwind CSS provides a series of useful designed utilities.
  - Since all styles are defined by predefined classes, it enforces a consistent design system across the entire application and simplifies maintenance.
  - With utility classes at hand, developers can quickly iterate on designs without switching between CSS and markup, reducing context switching and boosting productivity.
- **What are some potential pitfalls?**
  Maybe hard to read the code or make the bundle size too large?
  But I have used the shadcn combined with Tailwind CSS to design the UI, which will optimize the performance by importing styles on demand.

---

## Handling State & User Input

I think the order of this milestone is wrong... I have already upload the Counter.js to the test-app project..

## Reflections about Handling State & User Input

- **What happens if we modify state directly instead of using setState?**
  - **The UI may not update**: React relies on state immutability to trigger re-renders. Direct mutations bypass this mechanism, leaving the UI outdated.
  - **Unpredictable Bugs**: Future state updates may conflict with previous mutations, causing hard-to-track bugs (e.g., stale closures in callbacks).
  - **Broken Optimizations**: Features like React.memo or useMemo rely on immutability. Direct mutations make these optimizations unreliable.

---

## Understanding Components & Props

## Code for Understanding Components & Props

```javascript
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
```

## Reflections about Understanding Components & Props

- **Why are components important in React?**
  - **Modularity & Reusability**: Components act as building blocks. Write once, reuse anywhere (e.g., buttons, title, avatar).
  - **Encapsulation**: Components hide internal logic (state, API calls), exposing only props/UI.
  - **Separation of Concerns**: Split complex UIs into smaller, focused components
  - **Maintainability**: Centralized logic reduces redundancy. Fix a bug in one component → fix it everywhere.
