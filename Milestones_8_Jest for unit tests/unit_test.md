# Unit Test

## Reflection about Introduction to Unit Testing with Jest

- **Why is automated testing important in software development?**
  - This will prevent regressions, and help ensure that new changes won't break existing functionality.
  - The clear test will form a documentation for expected behaviors.
  - Although writing tests takes time upfront, it reduces debugging time and manual testing efforts in the long run.
- **What did you find challenging when writing your first Jest test?**
  - When I press a in the watch mode and run the default App test there seem an issue that jest cannot find the react-router-dom... And I still don't resolve that.

---

## Reflection about Testing React Components

- **What are the benefits of using React Testing Library instead of testing implementation details?**

  - **User-Centered Testing:**  
    Tests simulate how real users interact with components (e.g., clicking buttons, entering text), rather than relying on internal implementation details (like state variables or function names).
    Avoids breaking tests due to code refactors (e.g., renaming a component’s CSS class or restructuring hooks).
  - **Improved Maintainability:**  
    Tests pass as long as the component’s UI output and interactions remain consistent, even if internal logic changes.
    Developers can confidently modify code structure (e.g., splitting a component into smaller hooks) without rewriting tests.

- **What challenges did you encounter when simulating user interaction?**
  **Selecting Elements Accurately:**  
  Deciding which queries to use (e.g., by text, role, or test ID) can sometimes be challenging. Choosing the right queries is crucial for writing tests that closely mimic real user behavior.

---

## Reflections about Unit Testing Reflection: Mocking API Calls

- **Why is it important to mock API calls in tests?**
  By mocking API calls, tests become independent of external services. This ensures that tests run consistently and quickly regardless of network conditions or API availability.
  Mocking allows you to simulate various responses (success, error, edge cases) that may be difficult or impractical to reproduce with real API calls.
- **What are some common pitfalls when testing asynchronous code?**
  Overusing mocks can lead to tests that pass even when the integration with real APIs would fail. It’s important to strike a balance and ensure that critical integration points are also tested in staging or integration tests.
