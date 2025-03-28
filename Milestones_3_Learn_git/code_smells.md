# Identifying & Fixing Code Smells

## Code Examples or Descriptions for these common code smells

1. Magic Numbers & Strings: if (type == 2) => if (type == admin)
2. Long Functions: Functions which do too much and should be broken into smaller
   parts.
3. Duplicate Code: function A() print "aaa"; print "aaa"
4. Large Classes(God Objects): Classes that handle too many responsibilities.
5. Deeply Nested Conditions: Complex if/else trees that make code harder to
   follow.
6. Commented-Out Code: Unused code that clutters the codebase.

   ```python
   # function A
   ```

7. Inconsistent Naming: Variable names that don't clearly describe their
   purpose. String A, Int B

## Reflection

- **What code smells did you find in your code?** I once write a Magic Number
  situation in my code.
- **How did refactoring improve the readability and maintainability of the
  code?** The refactor make the code more readable. And make it easy to identify
  which is the situation that I am developing.
- **How can avoiding code smells make future debugging easier?** Avoiding these
  Code Smells will make code clean and clear, which will benefit further
  development and debug.
