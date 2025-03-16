# Preventing Unnecessary Renders with useCallback

## Code to test useCallback

```javascript
// src/components/OptimizedComponent.js
import React, { useState, useCallback } from "react";

// 子组件：未使用 useCallback 的回调函数
const ChildWithoutCallback = React.memo(({ onClick }) => {
  console.log("ChildWithoutCallback rendered");
  return <button onClick={onClick}>Without useCallback</button>;
});

// 子组件：使用 useCallback 缓存回调函数
const ChildWithCallback = React.memo(({ onClick }) => {
  console.log("ChildWithCallback rendered");
  return <button onClick={onClick}>With useCallback</button>;
});

const OptimizedComponent = () => {
  const [count, setCount] = useState(0);

  // define an uncached callback function that creates a new function every time it is rendered
  const handleClickNoCallback = () => {
    console.log("Button clicked without useCallback");
  };
  // define a callback function that uses useCallback to cache the function
  // since the dependency array is empty, this function is created only once throughout the lifecycle
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

## Reflection

- **What problem does useCallback solve?**
  The useCallback prevents child components from unnecessary re-renders caused by new function references. For example, when passing an inline function like onClick={() => {...}} to a memoized child (e.g., React.memo(Child)), the child re-renders every time the parent renders. useCallback caches the function, ensuring stable references unless dependencies change (e.g., [userId]).
- **How does useCallback work differently from useMemo?**
  - useMemo: Caches computed values (e.g., const total = useMemo(() => items.reduce(...), [items])).
  - useCallback: Caches function definitions (e.g., const handleClick = useCallback(() => {...}, [items])).
    Both optimize performance but target different scenarios: values vs. functions.
- **When would useCallback not be useful?**
  Well, during testing the function about useCallback, when the function involving some variable in parent component, the useCallback will still make the child component re-render.
  And the useCallback will not be useful when there are no child to re-render and some function without dependencies.
