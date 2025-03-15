# CI/CD Reflection

- **What is the purpose of CI/CD?**
  **Automate the integration process:**  
   Continuously merge code changes from multiple contributors, ensuring that integration issues are identified early.
  **Automate testing and validation:**  
  Run automated tests (unit, integration, end-to-end) on every change to catch errors before deployment.
- **How does automating style checks improve project quality?**
  **Prevent common errors:**
  Many style checkers also catch potential bugs (such as unused variables or syntax issues) early in the development cycle.
  **Ensuring consistency:**
  A consistent code style improves readability and maintainability, making it easier for team members to understand and collaborate on the code.
  **Reducing manual review workload:**  
  Developers and reviewers can focus on logic and functionality rather than formatting and style issues.
- **What are some challenges with enforcing checks in CI/CD?**
  Hard to identify the right balance in configuration. Overly strict rules may block valid contributions while too lax settings might not catch enough issues.
- **How do CI/CD pipelines differ between small projects and large teams?**
  The CI/CD pipelines will be simpler in small projects. While in large teams, more stages like unit tests, integration tests, security scans or performance testing will be take into consideration.
