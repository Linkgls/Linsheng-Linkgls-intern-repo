# Redux Toolkit Reflection

## Introduction to Redux Toolkit

### Reflections about Introduction to Redux Toolkit

- **When should you use Redux instead of useState?**
  - **Global State Management:** Redux is especially useful when multiple
    components need to access and update the same state. Redux provides a
    centralized store that any component can access.
  - **Complex State Logic:** When your application has complex state
    interactions or when the state logic becomes difficult to manage with
    useState alone. Redux's structured approach (with slices, reducers, and
    actions) makes state updates predictable and easier to debug.
  - **Large-Scale Applications:** Redux helps maintain a single source of truth
    for the application state, ensuring consistency and making debugging
    simpler.

## Using Selectors in Redux Toolkit

### Reflections about Using Selectors in Redux Toolkit

- **What are the benefits of using selectors instead of directly accessing
  state?**

  - **Encapsulation of State Structure:**  
    Selectors abstract away the structure of the state. Components don’t need to
    know how the state is organized, which makes refactoring easier if the state
    shape changes.

  - **Reusability:**  
    A well-defined selector can be reused across multiple components, ensuring
    consistency and reducing duplicate code.

  - **Memoization and Performance Optimization:**  
    Selectors can be memoized (e.g., using Reselect) to prevent unnecessary
    recalculations when the state has not changed, which can improve performance
    in large applications.
