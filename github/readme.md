Github Commands
=====

Some commands to ease your github workflow.

How to use
====

1. `samples github newRepo ${reponame}` -  This will create a new repo under your account with the reponame provided. If you don't provide a repo name then it will ask you while the script will be on github new repository page.
2. `samples github openIssue ${repository} ${issueTitle}` -  This will create a new issue under `repository` with the `title` provided
3. `samples github openPR ${repository} ${compare} ${base}` -  This will create a new PR under `repository` provided. You can also pass the `base` and `compare` branch.
4. `samples github openProfile ${userId}` -  This will open the github profile of `userId` provided. If no user provide it will open the profile of loggedIn user.
