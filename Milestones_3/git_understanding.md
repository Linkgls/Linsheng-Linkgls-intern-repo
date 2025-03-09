- **Why are PRs important in a team workflow?**
Pull Requests are the essential part of team workflow,  because they facilitate collaboration, maintain code quality, and ensure accountability. It is hard for the developer to find out their own mistakes. This process will also help catch potential issues early, before the code merged into the main branch. Besides, PRs will form a document of changes, which makes it easier to track modifications.
- **What makes a well-structured PR?**
    1. **Clear Title and Description**: The title should contain the information like refactor or chore and so on. And the description should include all the information about the modification in this PR.
    2. **Concise and Focused**: It should address only one purpose, avoiding multiple unrelated changes in one PR.
    3. **Well-Organized**: The PR should have logical messages to make it easier to track changes.
- **What did you learn from reviewing an open-source PR?**
Through reviewing the React PRs, I have learnt that PR is a very important aspect of team collaboration and communication. It could be a great way to enhance code quality by this collaborative approach.
Therefore, it is very important to make it well-organized and give effective code reviews.

---
- **What makes a good commit message?**
A good commit message should be:
1. Clear and Concise: It quickly communicates the purpose of the commit in a brief summary.
2. Focused: It describes a single, coherent change without mixing unrelated updates.
- **How does a clear commit message help in team collaboration?**
1. Easy for understanding: Make it easy to understand the purpose and impact of changes
2. Form a changing history for this project
3. Speeds up onboarding: New team member could learn this project by reading a well-documented commit history.
- **How can poor commit messages cause issues later?**
1. Hard for debug: Make it difficult to identify the root cause of issues.
2. Complicate Code History: A messy commit log can make it hard to trace changes.
3. Slow Down Team Productivity: May need to spend extra time deciphering the intent behind changes.
---
- **What Does Git Bisect Do?**
Git bisect is a command-line tool that uses a binary search algorithm to help identify which commit introduced a bug. "git bisect start/reset" is the Start and End command line. By using the command line "git bisect bad" "git bisect good" to mark the known bad and good commits. Git bisect will automatically test intermediate commits, which will reducing the number of steps needed to pinpoint the faulty change.
- **When Would You Use It in a Real-World Debugging Situation?**
1. A bug appears unexpectedly in a large commit history.
2. The error isn’t easily reproducible by inspecting recent changes manually.
3. To reduce manual effort.
- **How Does It Compare to Manually Reviewing Commits?**
1. **Efficiency**: By using binary search, it will be much faster than manually checking every commit.
2. **Accuracy:** It systematically tests commits to identify the original problematic one, reducing the likelihood of human error.
3.  **Automation:** Git bisect can integrate with scripts to automatically run tests on each commit, further streamlining the debugging process.
