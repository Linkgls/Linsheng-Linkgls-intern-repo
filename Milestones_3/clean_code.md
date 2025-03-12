# Clean Code

## Writing Unit Tests for Clean Code

- **How do unit tests help keep code clean?**
  The Unit Tests serve as a safety guard for the code. They will verify that each component behaves as expected. By checking each single unit and writing tests for them, all functions and modules will be designed to focus on single responsibility.
- **What issues did you find while testing?**
  Hard to achieve 100% coverage for large project. And the original design of the whole project will affect a lot to unit test part.

---

## Handling Errors & Edge Cases

### Original Code

```javascript
// before_refactoring.js
function processData(data) {
  // Assumes data is an object with a 'value' property
  if (data) {
    if (data.value) {
      // Process the value
      return data.value * 2;
    } else {
      // Fallback: silently return null if value is missing
      return null;
    }
  }
  // If data is falsy, return undefined
}
```

### Code After Reactor

```javascript
// after_refactoring.js
function processData(data) {
  // Guard Clause: Check if data is valid
  if (!data) {
    throw new Error("Invalid input: data must be provided.");
  }
  // Guard Clause: Check if data.value exists
  if (data.value === undefined || data.value === null) {
    throw new Error("Invalid input: data.value must be provided.");
  }
  // Process the value
  return data.value * 2;
}
```

- **What was the issue with the original code?**
  It didn't handle the invalid inputs.
  If data was not provided or if data.value was missing, it simply returned null or undefined without throwing exceptions.
- **How does handling errors improve reliability?**
  By using the Guard Clauses, the refactored code will make sure that invalid inputs will be caught immediately and throw the corresponding errors. It also make code more robust and easier for developer to identify the error and resolve issues.
