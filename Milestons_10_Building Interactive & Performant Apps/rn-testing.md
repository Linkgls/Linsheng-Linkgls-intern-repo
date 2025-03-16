# React Native Testing Reflection

- **Why is testing important in React Native development?**

  - **Stability Across Devices**
    Automated tests verify components work consistently on different devices and OS versions:
  - **Early bug detection:**
    The tests during development, will find the bug earlier, which reduces debugging time and leads to a smoother development process.
  - **Facilitates Refactoring:**  
    A robust test suite provides confidence when refactoring or adding new features.

- **How do you mock API calls in tests?**
  Mocking API calls is essential for isolating components from external dependencies and ensuring that tests run reliably and quickly. Here are some common methods:

  - **jest.mock() and jest.fn():**  
    You can replace modules like Axios or the native fetch API with mock implementations. For example, using `jest.mock('axios')` or by assigning a mock function to `global.fetch`. This lets you simulate API responses without making actual network requests.

  - **Simulating Asynchronous Behavior:**  
    Using async utilities like `waitFor` or `findBy*` queries from React Native Testing Library, you can simulate the delay of network requests and test how components behave once the data is fetched.

- **What’s the difference between unit and integration tests?**

  - **Unit Tests:**

    - **Focus:** Test a single piece of functionality in isolation (e.g., a component or a utility function).
    - **Speed:** Typically run very fast since they do not involve the full application context.
    - **Example:** Testing a single component’s render output or a pure reducer function.
    - **Goal:** Ensure that a small, isolated part of your codebase works correctly.

  - **Integration Tests:**
    - **Focus:** Verify that multiple components or modules work together as expected.
    - **Complexity:** May require setting up more context (like Redux stores or mocked API responses) and simulating user interactions.
    - **Example:** Testing a screen that fetches data from an API and renders a list of items, ensuring that the data flows correctly from the API call to the UI.
    - **Goal:** Validate the interactions between different parts of the application, ensuring they integrate properly.
