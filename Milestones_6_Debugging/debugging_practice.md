# Debugging Practice

## Code to recreate bug

```javascript
// src/DerivedStateBuggy.js
import React, { useState } from "react";

// Default ideas to show in the input field
const ideaList = [
  "I'm thankful for my friends",
  "I'm thankful for my family",
  "I'm thankful for my health",
  "I'm thankful for my hobbies",
  "I'm thankful for CSS Tricks Articles",
];

const maxStatements = 5;

function ParentBuggy() {
  const [list, setList] = useState([]);

  // Handler for when a statement is submitted
  const onStatementComplete = (payload) => {
    setList((prev) => [...prev, payload]);
  };

  // Reset the list
  const reset = () => {
    setList([]);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">
        Your Thankful List (Buggy)
      </h1>
      <p className="text-gray-600 mb-4">
        A five point list of things you're thankful for:
      </p>
      <div className="mb-4 space-y-2">
        {list.map((item, index) => (
          <p key={index} className="text-lg">
            <span className="font-semibold">Item {index + 1}:</span> {item}
          </p>
        ))}
      </div>
      {list.length < maxStatements ? (
        <StatementForm
          initialStatement={ideaList[list.length]}
          onStatementComplete={onStatementComplete}
        />
      ) : (
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded
           hover:bg-red-600 active:bg-red-700 transition"
        >
          Reset
        </button>
      )}
    </div>
  );
}

function StatementForm({ initialStatement, onStatementComplete }) {
  // Initialize state from props
  const [statement, setStatement] = useState(initialStatement);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onStatementComplete(statement);
      }}
      className="space-y-3"
    >
      <label htmlFor="statement-input" className="block text-gray-700">
        What are you thankful for today?
      </label>
      <input
        id="statement-input"
        type="text"
        value={statement}
        onChange={(e) => setStatement(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded
         focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="submit"
        value="Submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600
         active:bg-blue-700 transition cursor-pointer"
      />
    </form>
  );
}

export default ParentBuggy;
```

## Reflections

- **What was the issue?** The child component StatementForm initialized its
  state using the parent’s initialStatement prop only once:

  ```javascript
  const [statement, setStatement] = useState(initialStatement); // ✅ Runs once
  ```

  When the parent updated initialStatement (e.g., adding a new list item), the
  child’s state did not sync, leaving the input field stuck with stale data
  (e.g., old submitted text).

- **What debugging method did you use?**

  - Console logs:

  ```javascript
  // Child component
  console.log("Parent prop:", initialStatement, "Child state:", statement);
  ```

  Observed initialStatement updates did NOT trigger state changes.

  - React DevTools: Parent passed new initialStatement (e.g., "Cat" → "Dog").
    Child’s state remained at "Cat".

- **How did you resolve the problem?**

  - Derived state rule: useState(prop) initializes state once on mount. Later
    prop changes require explicit syncing.
  - Fix:

    ```javascript
    // Force-sync state when prop changes

    useEffect(() => {
      setStatement(initialStatement);
    }, [initialStatement]);
    ```

    Result: Child state now updates when parent passes new initialStatement.
