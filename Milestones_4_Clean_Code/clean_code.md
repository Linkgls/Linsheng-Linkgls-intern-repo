# Clean Code

## Writing Unit Tests for Clean Code

- **How do unit tests help keep code clean?** The Unit Tests serve as a safety
  guard for the code. They will verify that each component behaves as expected.
  By checking each single unit and writing tests for them, all functions and
  modules will be designed to focus on single responsibility.
- **What issues did you find while testing?** Hard to achieve 100% coverage for
  large project. And the original design of the whole project will affect a lot
  to unit test part.

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

- **What was the issue with the original code?** It didn't handle the invalid
  inputs. If data was not provided or if data.value was missing, it simply
  returned null or undefined without throwing exceptions.
- **How does handling errors improve reliability?** By using the Guard Clauses,
  the refactored code will make sure that invalid inputs will be caught
  immediately and throw the corresponding errors. It also make code more robust
  and easier for developer to identify the error and resolve issues.

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
2. Comments are useful when interfacing with external APIs or libraries where
   usage might not be immediately clear.

- **When should you avoid comments and instead improve the code?** When the code
  is too simple. Therefore, compared to add comments, it will be more convenient
  to let the code self-explanatory. And don't add comments to explain something
  like the meaning of variable. Try to modify the name of variables to let them
  easy to understand.

---

## Refactoring Code for Simplicity

### Example Code Before Refactoring

```javascript
function checkOut(cart) {
  let discount = 0.9;
  if (cart != null) {
    if (cart.products && cart.products.length > 0) {
      let sum_price = 0;
      for (let i = 0; i < cart.products.length; i++) {
        let product = cart.products[i];
        if (product.discount && product.discount > 0) {
          sum_price += product.price * product.amount * (1 - tem.discount);
        }
      }
      if (sum_price > 300) {
        return sum_price * discount;
      } else {
        return sum_price;
      }
    } else {
      return 0;
    }
  } else {
    throw new Error("Cart is Empty!!!");
  }
}
```

### Example Code After Refactoring

```javascript
function checkOut(cart) {
  if (!cart) {
    throw new Error("Cart is Empty!!!");
  }

  if (!cart.items || cart.items.length === 0) {
    return 0;
  }

  return calculatePrice(cart);
}

function calculatePrice(cart) {
  let sum_price = 0;
  let product = cart.products[i];
  if (product.discount && product.discount > 0) {
    sum_price += product.price * product.amount * (1 - tem.discount);
  }
  let discount = 0.9;
  if (sum_price > 300) {
    return sum_price * discount;
  } else {
    return sum_price;
  }
}
```

- **What made the original code complex?** There are plenty of if-else
  conditions, making it hard to follow.
- **How did refactoring improve it?**

1. Add some early validation using Guard Clauses simplified the overall
   structure by handling invalid situations.
2. Extracting some calculation into helper functions to reduce redundancy.

---

## Avoiding Code Duplication

### Original Code for avoiding code duplication

```javascript
function welcomeToNewUser(user) {
  if (user) {
    console.log("Welcome! " + user.firstName + " " + user.lastName);
    console.log("Hope You Have A Nice Day!");
  }
}

function showInfo(user) {
  if (user) {
    console.log("Name: " + user.firstName + " " + user.lastName);
    console.log("Email: " + user.email);
    console.log("Account Type: " + user.type);
  }
}
```

### After Refactor

```javascript
// all user information formatter func
function formatAllInfo(user) {
  if (!user) {
    return null;
  }
  const fullName = user.firstName + " " + user.lastName;
  return {
    fullName: fullName,
    email: user.email,
    type: user.type,
    welcomeMessage: "Welcome! " + fullName,
    nameInfo: "Name: " + fullName,
    emailInfo: "Email: " + user.email,
    accountInfo: "Account Type: " + user.type,
  };
}
function welcomeToNewUser(user) {
  const info = formatAllInfo(user);
  if (info) {
    console.log(info.welcomeMessage);
    console.log("Hope You Have A Nice Day!");
  }
}

function showInfo(user) {
  const info = formatAllInfo(user);
  if (info) {
    console.log(info.nameInfo);
    console.log(info.emailInfo);
    console.log(info.accountInfo);
  }
}
```

- **What were the issues with duplicated code?** There are two duplicated code,
  which will increase maintenance effort. Any change will applied to
  multi-functions.
- **How did refactoring improve maintainability?** All user info will be format
  in the function formatAllInfo, which will ensure consistency across different
  parts of the code. The further update of the user's info will only need to
  modify this function.

---

## Writing Small, Focused Functions

### Original Code For Writing Small/Focused Functions

```javascript
function checkOut(cart) {
  if (!cart) {
    throw new Error("No Cart Error!!!");
  }
  if (!cart.goods || cart.goods.length == 0) {
    console.log("The Cart is empty!");
    return;
  }
  let totalCost = 0;
  for (let i = 0; i < cart.goods.length; i++) {
    good = goods[i];
    console.log("Calculate good " + good.id + ": " + good.name + "!");
    totalCost += good.price * good.quantity * good.discount;
  }
  console.log("Total Cost: " + totalCost);
  return totalCost;
}
```

### Code After Refactor for Writing Small, Focused Functions

```javascript
/**
 * Check the validation of cart
 * @param {Object} cart
 * @returns {boolean} If cart is valid return true，else return false
 */
function validateCart(cart) {
  if (!cart) {
    throw new Error("No Cart Error!!!");
  }
  if (!cart.goods || cart.goods.length === 0) {
    console.log("The Cart is empty!");
    return false;
  }
  return true;
}

/**
 * Calculate the total price of each good, and output the calculation log.
 * @param {Object} good
 * @returns {number} total cost of this good.
 */
function calculateGoodCost(good) {
  console.log("Calculate good " + good.id + ": " + good.name + "!");
  return good.price * good.quantity * good.discount;
}

/**
 * Check out the cart
 * @param {Object} cart
 * @returns {number|undefined} return the total cost of the whole cart
 */
function checkOut(cart) {
  if (!validateCart(cart)) {
    return;
  }
  let totalCost = 0;
  for (let i = 0; i < cart.goods.length; i++) {
    const good = cart.goods[i];
    totalCost += calculateGoodCost(good);
  }
  console.log("Total Cost: " + totalCost);
  return totalCost;
}
```

- **Why is breaking down functions beneficial?** Breaking down functions will
  improve the code readability, making testing and debugging easier.

- **How did refactoring improve the structure of the code?** By isolating the
  validation, calculation and main function, each unit has a clear
  responsibility. This will improve the readability and maintainability of code.
  Also, this will improve the further extend and test experience.

## Naming Variables & Functions

### Original Code for Naming Variables & Functions

```javascript
function f1(a) {
  if (!a) {
    throw new Error("No Cart Error!!!");
    return;
  }
  if (!a.b || a.b.length === 0) {
    console.log("The Cart is Empty!");
    return;
  }
  let c = 0;
  for (let d = 0; d < a.b.length; d++) {
    let e = a.b[d];
    console.log("Calculate Good " + e.id + ": " + e.name);
    e += e.price * e.quantity * e.discount;
  }
  return e;
}
```

### Refactor for Naming Variables & Functions

```javascript
function checkOut(cart) {
  if (!cart) {
    throw new Error("No Cart Error!!!");
    return;
  }
  if (!cart.goods || cart.goods.length === 0) {
    console.log("The Cart is Empty!");
    return;
  }
  let totalCost = 0;
  for (let i = 0; i < cart.goods.length; i++) {
    let good = cart.goods[i];
    console.log("Calculate Good " + good.id + ": " + good.name);
    totalCost += good.price * good.quantity * good.discount;
  }
  return totalCost;
}
```

- **What makes a good variable or function name?** Good name is descriptive and
  clearly indicates the purpose of the variable or function. Also the name
  should use the Uppercase and Lowercase letter to make it readable.
- **What issues can arise from poorly named variables?** It will be so confused
  and misinterpretation of the code's purpose. And they will make the code
  harder to debug, maintain. It is very possible that each time when the team
  try to debug or maintain the code, they will try to re-understand the code
  from start.
- **How did refactoring improve code readability?** By renaming variables and
  function will clear and meaningful names(like from a to cart, from b to
  goods), the purpose of the code become clear. This will make the code more
  readable and convenient for further maintain and extend.

---

## Code Formatting & Style Guides

- **Why is code formatting important?** Code formatting ensures that the code is
  easy to read. A consistent style helps developers quickly understand the
  codebase, and making it easier to spot potential issues.
- **What issues did the linter detect?** The linter will detect the issue like
  missing semicolons and improper spacing. Or some deviations from the Airbnb
  style guide's conventions.
- **Did formatting the code make it easier to read?** Using the Prettier and
  ESLint to automatically format the code created a uniform structure, which
  greatly improved readability. After the refactoring, it is now easier to
  locate and understand different sections of the code

---

## Understanding Clean Code Principles

**Research and Summarize Clean Code Principles:**

- **Simplicity:**  
  Keep code as simple as possible. Avoid unnecessary complexity by using
  straightforward logic and minimal abstractions. Simple code is easier to
  understand and less prone to bugs.
- **Readability:**  
  Code should be easy to understand by anyone who reads it. This means using
  clear naming conventions, proper formatting, and descriptive comments when
  needed. Readable code reduces the cognitive load for new developers and helps
  in debugging.
- **Maintainability:**  
  Future developers (including yourself!) should be able to work with the code
  easily. This is achieved by writing modular, well-documented code with clear
  separation of concerns, making it easier to update or extend over time.
- **Consistency:**  
  Follow style guides and project conventions to maintain a uniform codebase.
  Consistency helps prevent confusion and makes it easier for teams to
  collaborate, as everyone adheres to the same set of rules and patterns.
- **Efficiency:**  
  Write performant, optimized code without falling into the trap of premature
  optimization. Strive for balance by writing code that runs well while still
  being clear and maintainable.

### Example Code from Website

```javascript
var day = "monday";
var weather = "sunny";

let daytime = function () {
  if (day == "monday") {
    if (weather == "sunny") {
      console.log(`this is a good sunny monday`);
    } else if (weather == "cloud") {
      console.log("this is a cloudy monday");
    } else if (weather == "storm") {
      console.log("this is a stormy monday");
    }
  } else if (day == "tuesday") {
    if (weather == "sunny") {
      console.log(`this is a good sunny tuesday`);
    } else if (weather == "cloud") {
      console.log("this is a cloudy tuesday");
    } else if (weather == "storm") {
      console.log("this is a stormy tuesday");
    }
  } else if (day == "wednesday") {
    //other day of the week
  }
};

daytime();
```

### Example Code After Rewrite

```javascript
var day;
var weather;

weathers = {
  sunny: "sunny",
  cloud: "cloudy",
  storm: "stormy",
};

let daytime = function (day, weather) {
  console.log(`this is a good ${weathers[weather]} ${day}`);
};

daytime("monday", "cloud");
```
