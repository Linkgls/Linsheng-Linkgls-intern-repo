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

---

## Commenting & Documentation

### Poorly commented code

```javascript
// Calculate the sum of two numbers
function add(a, b) {
  // return a+b
  return a + b;
}
```

### After Rewrite

```javascript
/**
 * Calculates the sum of two numbers.
 *
 * This function takes two numeric inputs and returns their sum.
 * It assumes that both inputs are valid numbers. If there's a possibility
 * of non-numeric inputs, consider adding input validation.
 *
 * @param {number} a - The first addend.
 * @param {number} b - The second addend.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}
```

- **When should you add comments?**

1. When the code includes some complex logic or hard to understand.
2. Comments are useful when interfacing with external APIs or libraries where usage might not be immediately clear.

- **When should you avoid comments and instead improve the code?**
  When the code is too simple. Therefore, compared to add comments, it will be more convenient to let the code self-explanatory.
  And don't add comments to explain something like the meaning of variable. Try to modify the name of variables to let them easy to understand.
