# React Native Performance Optimization Reflection

- **What are the most common performance issues in React Native?**

  - **Excessive Re-Renders:**  
    Frequent and unnecessary re-renders can slow down the UI, especially when many components update simultaneously without proper memoization.

  - **Memory Leaks:**  
    Unreleased timers, event listeners, or lingering references can cause memory leaks, leading to degraded performance over time.

  - **Heavy Computation on the Main Thread:**  
    Running intensive calculations directly during rendering or in lifecycle methods may block the UI thread, causing dropped frames and laggy interactions.

- **How do useMemo and useCallback improve performance?**

  - **useMemo:**  
    Memoizes the result of expensive computations so that they are recalculated only when their dependencies change. This prevents the component from performing the same heavy calculation on every render.

  - **useCallback:**  
    Memoizes function definitions to avoid creating new function instances on every render. This is particularly useful when passing functions as props to memoized child components, reducing unnecessary re-renders.

- **What tools can you use to measure and monitor app performance?**
  React Native Performance Monitor, React DevTools Profiler and Flipper.
