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
---
~~~ shell
git checkout main -- <file>
~~~
**What does this command do?**
This command could restore the specific file from main branch to this working directory without affecting other changes in current branch. Essentially, it reverts the file to the state it is in on main.
**When would you use it in a real project?**
When I only want to modify some specific files, but not modify the other files I have already changed.
~~~ shell
git cherry-pick <commit>
~~~
**What does this command do?**
This command applies a specific commit from another branch to the current branch by using the identification code. It effectively "picks" a commit and applies its changes without merging the entire branch.
**When would you use it in a real project?**
This Cherry-picking will allow me to isolate one single commit and apply wherever it needed. This commit may be a bug fix or a single feature.
~~~ shell
git log
~~~
**What does this command do?**
git log displays the commit history of your repository. It shows commit messages, authors, dates, and commit hashes, providing a timeline of how changes evolved.
**When would you use it in a real project?**
This command is essential for reviewing the project history, debugging issues, and understanding the evolution of the codebase. It's a critical tool for both code reviews and for tracing the origin of bugs.
~~~ shell
git blame <file>
~~~
**What does this command do?**
This command annotates each line in a file with details about the last commit that modified that line, including the author, commit hash, and the date of modification.
**When would you use it in a real project?**
I will use this when I want to check out the origin of a particular change. It’s invaluable for debugging and understanding why a certain change was made
- **After all, what surprised you while testing these commands?**
I was pleasantly surprised by the level of precision and efficiency these commands offer.
Ease of fine-grained operation: git checkout main could restore only one file. And git cherry-pick <commit> could restore one commit. These commands provides plenty of different level of file changes for projects.
--- 
- **What caused the conflict?**
The conflict was caused by making different changes to the same file in two separate branches. 
Then when one branch be merged into another branch, the conflict will be caused.
- **How did you resolve it?**
By using the Vscode plugin, it will show some hints like ==== <<<< >>>>. By analyzing the different between these two parts, I will choose which part should be saved to this branch.
- **What did you learn?**
Dealing conflicts is very common situations during the collaboration team. The key is to understand the root of conflicts and try to solve them by tools.
---
- **Why is pushing directly to main problematic?**
In a collaborate team, there are many people try to do changes in the same time. It will be very hard for dealing so many conflicts.
- **How do branches help with reviewing code?**
Each person will do changes to their own branch. The work from different team member will be isolated. If some bug need to be fixed, a bug-fix branch could be created. And all the bug fixing and test jobs will be finished inside this branch until the bug fixed successfully.
- **What happens if two people edit the same file on different branches?**
This file will be different on different branches till these two branches being merged.