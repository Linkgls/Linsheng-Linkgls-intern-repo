# React Hooks

## Preventing Unnecessary Renders with useCallback

## Code to test useCallback

```javascript
// src/components/OptimizedComponent.js
import React, { useState, useCallback } from "react";

// Child component: callback function without useCallback
const ChildWithoutCallback = React.memo(({ onClick }) => {
  console.log("ChildWithoutCallback rendered");
  return <button onClick={onClick}>Without useCallback</button>;
});

// Child component: callback function with useCallback
const ChildWithCallback = React.memo(({ onClick }) => {
  console.log("ChildWithCallback rendered");
  return <button onClick={onClick}>With useCallback</button>;
});

const OptimizedComponent = () => {
  const [count, setCount] = useState(0);

  // define an uncached callback function that creates a new function
  // every time it is rendered
  const handleClickNoCallback = () => {
    console.log("Button clicked without useCallback");
  };
  // define a callback function that uses useCallback to cache the function
  // since the dependency array is empty, this function is created only
  // once throughout the lifecycle
  const handleClickWithCallback = useCallback(() => {
    console.log("Button clicked with useCallback");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <div style={{ marginTop: "20px" }}>
        <ChildWithoutCallback onClick={handleClickNoCallback} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <ChildWithCallback onClick={handleClickWithCallback} />
      </div>
    </div>
  );
};

export default OptimizedComponent;
```

## Reflection about useCallback

- **What problem does useCallback solve?** The useCallback prevents child
  components from unnecessary re-renders caused by new function references. For
  example, when passing an inline function like onClick={() => {...}} to a
  memoized child (e.g., React.memo(Child)), the child re-renders every time the
  parent renders. useCallback caches the function, ensuring stable references
  unless dependencies change (e.g., [userId]).
- **How does useCallback work differently from useMemo?**
  - useMemo: Caches computed values (e.g., const total = useMemo(() =>
    items.reduce(...), [items])).
  - useCallback: Caches function definitions (e.g., const handleClick =
    useCallback(() => {...}, [items])). Both optimize performance but target
    different scenarios: values vs. functions.
- **When would useCallback not be useful?** Well, during testing the function
  about useCallback, when the function involving some variable in parent
  component, the useCallback will still make the child component re-render. And
  the useCallback will not be useful when there are no child to re-render and
  some function without dependencies.

## Code to test useMemo

```javascript
// src/components/OptimizedList.js
import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  let result = 0;
  // Simulate a time-consuming calculation (e.g. a large loop)
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  return result + num;
};

const OptimizedList = () => {
  const [number, setNumber] = useState(0);
  const [dummy, setDummy] = useState(0);
  // Used to trigger re-render without affecting calculation

  // a console.log() statement is added to the component to track when it is rendered
  console.log("OptimizedList rendered");

  // use useMemo to cache the calculation result, only re-calculate when number changes
  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  // use useMemo to generate a large list, which is created only once
  const largeList = useMemo(() => {
    console.log("Generating large list...");
    return Array.from({ length: 1000 }, (_, i) => i + 1);
  }, []);

  return (
    <div>
      <h2>Calculated Value: {calculatedValue}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setDummy(dummy + 1)}>
        Trigger Re-render (dummy)
      </button>
      <ul>
        {largeList.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizedList;
```

---

## Optimizing Performance with useMemo

## Reflection about useMemo

- **How does useMemo improve performance?** useMemo caches the result of a
  computation and reuses it across re-renders until dependencies change. This
  avoids recalculating time/resource-consuming function on every render,
  critical for heavy operations like data filtering or mathematical
  transformations.
- **When should you avoid using useMemo?**

  - Trivial computations:

  ```javascript
  const total = 1 + 2; // simple calculation
  ```

  - Rarely re-rendering components: Static components (e.g., headers) don’t
    benefit.

  - Frequently changing dependencies: If [deps] update every render, caching
    becomes redundant.

- **What happens if you remove useMemo from your implementation?** The cached
  value will recompute on every render, even if inputs are unchanged. This can
  degrade performance, especially in components with frequent re-renders (e.g.,
  animations, real-time data feeds).

---

## Understanding React Hooks: useEffect

## Code to test useEffect

```javascript
// src/components/EffectDemo.js
import React, { useState, useEffect } from "react";

const EffectDemo = () => {
  const [data, setData] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(false);

  // when the component mounts and unmounts, log the event
  useEffect(() => {
    console.log("EffectDemo mounted"); // log when the component mounts

    return () => {
      console.log("EffectDemo unmounted"); // log when the component unmounts
    };
  }, []); // empty dependency array: only run on mount and unmount

  // when fetchTrigger changes, fetch data from an API
  useEffect(() => {
    if (!fetchTrigger) return; // only run when fetchTrigger is true
    console.log("Fetching data...");

    // use AbortController to support cancelling the request
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log("Data fetched:", json);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      });

    // cleanup function: cancel the request when the effect
    // re-runs or the component unmounts
    return () => {
      console.log("Cleaning up fetch effect");
      controller.abort();
    };
  }, [fetchTrigger]); // dependency: fetchTrigger

  return (
    <div>
      <h2>Effect Demo</h2>
      <button onClick={() => setFetchTrigger((prev) => !prev)}>
        {fetchTrigger ? "Cancel Fetch" : "Fetch Data"}
      </button>
      {data && (
        <div>
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default EffectDemo;
```

## Reflection about useEffect

- **When should you use useEffect instead of handling logic inside event
  handlers?** useEffect is ideal for side effects that are not directly
  triggered by a single event—for example, logging on mount/unmount, subscribing
  to external data sources, or performing cleanup. It runs after the component
  renders, keeping event handlers focused on user interactions.
- **What happens if you don’t provide a dependency array?** If you omit the
  dependency array, the effect will run after every render.
- **How can improper use of useEffect cause performance issues?** If you provide
  an incorrect dependency array (or omit it entirely), the effect may run more
  often than necessary, re-running expensive operations or network requests on
  every render. This wastes resources and can make the application sluggish. For
  some time/resource consuming function, should use the useEffect only
  necessary.
