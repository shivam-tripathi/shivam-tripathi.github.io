---
title: Revision Control Systems (RCS) and Git
date: 2016-10-23
tags:
  - git
  - software engineering
author: Shivam Tripathi
location: Hamirpur, Himachal Pradesh
---

<ToggleDarkMode/>

### Introduction

Revision control systems (RCSes) - are softwares that keep snapshots of various versions of the program in the development of a project, sort of like manuscripts of a book being written or a pathetic love letter with multiple additions and deletions. This helps us to keep record of every little change in the software we have made, and if things fail we can go back to the previous state.

![an image alt text](/images/tech/git.png "Git : Revision Control System")

### Time travellers
RCS gives us the power to go back in time - sort of time travel techniques, meaning to say we can look what a file(system) looked like before I made some changes to it (and probably messed it up). We can keep many copies of same project - and keep making changes to it without effecting the other copies (like "Hey, this is my copy, you write on your copy"). Also, it may be necessary that I want to experiment on something in my code - and not want to mess with the original stuff, so I will make a separate "branch" of my copy and then play with it.


It so might happen that other person (with a separate copy) wrote something very nice - and it needs to be incorporated in the original main source code. How will I get this code without messing up the whole different copy setup? A simple answer would be - merge the main copy with "new good thing" that needed to be added to the main source code. You can merge the main source code with your personal copy later. But how is it done?


### Git, what?
Git is a distributed revision control system - this means that any given copy of the project works as a standalone copy of the "repository" and it's history. Any new changes will have to incorporated again. Others include Mercurial and Bazaar.


### What do POSIX guys say?
POSIX has set up standards for all UNIX like machines. Some commands described in POSIX standard serve as building blocks for the RCS. These POSIX standard commands are diff and patch.
diff compares the files line by line.

```bash
diff file1.c file2.c > diffs
diff -u file1.c file2.c
#lists all the lines removed from file1.c, and all new lines added in file2.c
diff -ur file1.c file2.c > diffs
patch < diffs
#causes file1.c to be patched with file2.c - file1.c becomes same as file2.c
diff -R < diffs
#file1.c is patched in reverse order - i.e. restored to initial state
```

### Where is it used?
Suppose I have a project I am working on. After releasing the first version, I work on the second version. At the end of completion of second version (or everytime I finish work during the day), I run

```bash
diff -ur v1.c v2.c > diff-v1v2
```

The main file can be patched later with patch < diff-v1v2. In case I run into a bug, I will run

```bash
patch -R < diff-v1v2.
```

But this entire process of keeping diffs and patching is a tedious task, so RCS's do this task for us.


### Understanding git
Git is a C program. It's based on small set of objects. The key object is the commit object, which is nothing but a set of diff, (sort of successive diffs after each commit). Given a previous commit object and set of changes made to the previous one, a new commit encapsulates all this information. Index (the list of changes made to the file since the last commit) helps in generation of the new commit.


The commit objects link together to form a tree, stepping  up  or down a tree is equivalent to using  patch and patch -R commands. The repository, formally, is not a single object. But you can imagine to be one, as almost common command apply to the whole repository - like new, copy, free etc.


To initialize an empty git repository you can do

```bash
git init
#To make a copy of your own from code on the internet -
git clone http://url.com/file.git
```

This create a new hidden folder, to store all of version control files. If you want to meddle with the code, but are afraid that you'll spoil the thing, then (if the
repository is in ~/path/to/repo/file.c) you can locally copy the code using -

```bash
git clone ~/path/to/repo/file.c
```

Meddle with it, and when you're done, delete it.


### Behind the scenes
All the git data is in .git folder. So freeing the code from git is equivalent to - rm -rf ~/path/to/repo/.git
Everything is very self contained (read standalone copies of the repository and it's history), it can be easily copied, and quick experimentation can be done.
The *index* (Git source : struct index_state) is the list of changes to be bundles into next commit. It exists as we don't want every change in the repository to be committed. Suppose there are files : file.h, file.c, file.o and file (executable), then maybe if we want to track changes in the file.h and file.c, and let the rest be regenerated (simply put we don't want to track them, as they are not part of the source code), we will do -

```bash
git add file.h file.h
Similarly we can
git rm file.h
git mv file.c new_file.c
```

Changes made to file already tracked by git is not done automatically, which is different from other RCSes. To do this, we can either add every file again individually, by git add file_name.c or we can use:

```bash
git add -u
```
When we have added enough of index changes added to the tracker, we might want to commit the changes using :

```bash
git commit -a -m "Message goes here"
```
The -m adds the message to the commit, which ideally should summarize all the changes added and
committed. It is recommended to enter commit message, for maybe sometime in the future we are
looking at the commits, and want to revert back to a certain commit in the past, without the message
it would not be easy to recall which commit incorporated what changes. If we omit message here, then
git will open up a text editor (the default one is vi, you can change in .bashrc/.zshrc/ rc file of
whatever bash you use).


The -a command tells the git to automatically run git add -u before making this commit. If you only
want the files you added separately skip -a.


Calling git commit -a makes all present tracking encapsulated into commit object, and clears the
index. Now we can continue with our present work, even go forward and delete all the files. We will
be recover to the last commit message easily. So, don't clutter out the code with a lot of commented
out not presently needed code - delete them.

To redo last commit (possible to add something you forgot to add earlier):
git commit --amend -a -m "New message"

A commit object sometimes best thought of as a snapshot of the project at a particular point in time
and sometimes as a diff from it's parent. It makes one wonder if internally, a commit is a diff or
a complete snapshot? Earlier git always stored the snapshots, unless you ran git gc (garbage collect
) to compress a set of snapshots into a set of deltas (diff). Now it is automatically run after a
few commands - so git is probably storing diffs (not necessarily).

We use git diff to see the diffs that are the core of the commit object and git log to see metadata.
The key metadata is the name of the object, which is assigned by the SHA1 hash, a 40 digit
hexadecimal number that can be assigned to an object - and that same object will have same name in
every copy of the repository. We can see the hash key using git log. To see a particular commit
state, we can do by :

```bash
git checkout key
```

We need only that many key elements that can successfully identify the commit object, which is usually no more than 4 to 5 elements.
This does sort of what we did using patch - like time travel - rewinding to the past state. At this
point if you do git log - only the commits before the commit state we are presently in - appear.
This is because commit only has pointers to it's parents.
The rarely used git reflog will list all the commit the present repository knows about.
Better way to returning to a state is by using tags - maintained as separate objects with human
friendly name like 'master'. These tags hold a pointer to a commit object in the file.

```bash
git checkout master
```


**git diff**

Shows the difference between present state and last commit

**git diff {hash key of previous commit}**

 Shows the difference between present state and commit object

**git diff {hash1} {hash2}** :: Shows the difference from one commit object and and the other


Git doesn't like doing anything when there are uncommitted changes in the current working directory
directory. For example, if you are going to go spelunking into a previous commit object - then you
cannot do so unless you commit the uncommitted changes or get rid of them or put the changes in the
stash. Stash is an special commit object - something that you would get from git commit -a, but also
with all the untracked files too.

```bash
git stash
git checkout <hash1> #or branch name
#.... do your thing ....
git checkout initial_branch
git stash pop
```

Another way is to get rid of all the changes made since last commit - this is done by:

```bash
git reset --hard
```

If you wish make some changes in the last commit, you can easily do so:

```bash
git reset HEAD~
#... do your thing ...
git add whatever_you_wish_to_add
git commit
```

Or using:

```
git commit --amend
# make changes
git add whatever_you_wish_to_add
git commit
```


### Trees in git
As soon as a user runs git init - it becomes tree's root node. Except all the initial commit - all
the commits have a parent commit and the commit records the difference between it and the parent
commit. The terminal node in the sequence, the tip of the branch is tagged with the branch name. For
our purposes there is one-to-one correspondence between the branch tips and the series of diffs that
led to the tip - i.e. branches and commit object at the tip can be used interchangeably.
Thus if the tip of the master branch is 2d193fed, then git checkout master and git checkout 2d193fed
is the same thing.
It also means that list of committed objects can be re-derived at any time by starting at the commit
at the named tip and tracing back to the origin of the tree - root.

The typical custom is to keep the master branch fully functional at all times. When you want to add
any new feature or do some inquiry - make another branch. When the branch is fully functional - we
can merge the the new feature back into the master.

```bash
git brach new_branch
git checkout new_branch
#or equivalently
git checkout -b new_branch
#What branch you are right now in?
git branch
```

### Paradox
Here is something to think about : What will happen if you buy a time machine, go back in time, and knock out the guy who made the time machine? Well, in the git world - the present doesn't change - it splinters off to another history (much like regular science fiction movies!). So if you checkout to a past commit - and add some new commits - then if you run `git branch` - it will simply output `(no branch)`. You need to checkout to a new branch if you want to start from that point in commit tree.

```bash
git branch new_branch_name <commit hash>
```

GUI for seeing how branching has occurred can be seen via gitk or git instaweb (starts a web server
that lets us interact in the browser).

### Merging
We can make two branches merge to incorporate the code from one branch to another. This is done by :

```bash
git checkout master #suppose we want to merge into master
git merge new_branch
#If there are conflicts - they have to added and committed
#in the master branch and then merge will be completed
```

**Fast-forward**

When we merge a branch, all the diffs in the branch are automatically added to the
branch which is being merged to. This is called fast-forwarding in git.

But if changes have been made in the master branch too, then it is not so simple. We will have to
resolve conflicts in such a case.

```bash
git merge branch_name
#message informing about the conflicts
git status #gives the list of unmerged files
#open the unmerged file, fix issues, add them and commit them
#keep repeating the above till all the files have been merged
```

### Deleting
Deleting the branch can be done by:

```bash
git delete branch_name
```

### Rebase
When there are two branches from same common ancestor, then using the rebase command, we can change the rebase we can reset new common ancestor - as if the branching occured from the commit specified:

```bash
git checkout _branch
git rebase <hash key>
```

Typical usage is to rebase from master branch to side branch. As letting the diffs pile up can lead to very painful merge in the end, rebasing often is a good idea.

### Remotes repositories
The repository has pointers called remotes, which are pointers to other related repositories around
the world. When we clone a repository, it creates a remote from where the repository has been cloned
called "origin". In the typical case, this is the only remote we will ever use.
When we first clone and run git branch, we get one lonely branch, no matter how many branches the
original repository had. Running git branch -a will give all the branches the git knows about.

To update the repository cloned, we need to run git fetch so that all the new changes incorporated
in the remote are reflected in your copy.
Also, `git pull origin master` is equivalent to `git fetch; git merge remotes/origin/master`
The converse is git push, used to update the contents in the remote.
Suppose we are working on the branch bb, then we can push contents using :

```bash
git push origin bb
```
There are good odds that when we push our changes, applying the diffs from your branch to the remote
branch will not be a fast forward (it will be if no other changes have been made in the remote
branch). Resolving a non-fast forward merge typically requires human intervention, and there is
probably no human at the remote. Thus, git will only allow fast forward merges. So we have to make
sure that all the git push are fast forward only, which is done by :
	*Run git pull origin to get the changes made since the last pull
	*Merge the changes, resolving the diffs
	*Run git commit -a -m "Deal with merges"
	*Run git push origin master, as now only a single diff is left, git will merge it automatically

_git init --bare_ : This command restricts anyone to actually do any work in that directory, users will have to clone to do anything at all. Sometimes `--shared=group` type flags come in handy.

Or we can create a public bare repository, and create private working repository. We push to the
public bare repository, only to later pull the changes later to the working repository.

:)
