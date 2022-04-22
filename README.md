# GUIDELINES FOR team6-finlab (v1.0)

# Index

-   Project goal
-   Team
-   Workflow
-   Stack and tools
-   Project setup
-   Branch naming
-   Commit messages

# PROJECT GOAL AND ASSIGNMENTS:

ORIGINAL SOURCE: https://tinyurl.com/56d8vzxj
Phase 1: Make a convincing mockup of the following FinLab website pages:

-   website home (@Marco Moncada)
-   contact-us page (@Bibin NJ)
-   case-studies#3 (@Roberta Tedde)
-   services/technology-advisory (@Fabio Viscuso)
-   shop page (@TBD)

Phase 2: Add JS functionality

-   The hamburger menu triggers an offcanvas element that logs form inputs to the console
    with a success message (e.g: success: lorem, 1234)
-   The "talk an expert" button triggers a modal with a form that logs form inputs to the console
-   services/technology-advisory form is functional and logs its inputs to the console
-   Add a cookie info element (fixed position on the bottom-left of each page) that logs the user choice

-   Project deadline: 06/05/2022

# TEAM:

-   Bibin N.J.
-   Fabio Viscuso (Project Lead)
-   Marco Moncada
-   Roberta Tedde

-   Jacopo "jagama" M.G.S. (Stakeholder)

# WORKFLOW:

-   Daily stand-up review (15 minutes, from 9:30 to 9:45, Monday to Friday)
-   Sprint start: each Monday
-   Sprint duration: 1 week

Schedule:
Phase 1 : ENVIRONMENT PREPARATION

-   Immediately notify any problem with your working setup (e.g. VS Code not starting)
-   If starting a new feature, first pull updates from the appropriate branch(es)

Phase 2 : DEVELOPMENT

-   Commit often, for example when a text section is complete
-   Push at any meaningful chunk of work (e.g. completed a layout section)

Phase 3 : ON COMPLETED (PUSHED) TASK

-   Make comparisons and/or initial tests
-   Ask for a code review
-   Make a Pull Request to the appropriate branch and notify the RO

# STACK AND TOOLS:

-   VS Code with required extensions [Live Server, Live Share], suggested [Git Graph, Git Lens]

-   Boostrap v5.1.x (Docs: https://getbootstrap.com/docs/5.1/getting-started/introduction)
    For this project we will use the CDN import method, your work enviroment
    already includes the required dependencies

    -   CSS (use as the first CSS import in <head>)
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    -   JavaScript (insert to the bottom of the <body>)
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    -   Bootstrap Icons
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

-   GitHub repo (https://github.com/FabioViscuso/team6-finlab)

-   Trello kanban (https://trello.com/b/8or5pmHd/team-6-kanban)

# PROJECT SETUP:

Legend:

-   Any name without extension (e.g: .css, .js) is a folder name (e.g: 'images' is a folder)
-   -> stands for a subfolder (e.g supFolder->[subfolderElement1, subfolderElement2, ecc])

The root folder contains homepage and common assets
[index.html, style.css, index.js, images, shared->[images, css->[design.css]], pages->[page1, page2, ...]]

Each page has its separate subfolder, and each subfolder has this structure
pages->page1->[index.html, style.css, index.js, images]
pages->page2->[index.html, style.css, index.js, images]
etc

NOTE: style.css should only be used for any local override.
Check shared/css/design.css for common style overrides

# BRANCH STRUCTURE AND NAMING:

This project will have a production branch named [main] and a development branch named [develop]
Each page in the # PROJECT GOAL AND ASSIGNMENTS section will have its appropriate branch [feat/page-name]
Any pull request CANNOT be directed to [main], but to [develop] (mostly) or other relevant branch

Branch Naming:

-   New feature: feat/name-of-feature [e.g. feat/homepage]
-   Bugfixing: bugfix/what-you-fixed [e.g. bugfix/missing-nav-css]
-   Hotfix: hotfix/what-you-fixed

    NOTE: Hotfixes are non-blocking issues that can be solved on short term, while bugfixes
    must be re-added to the backlog and scheduled for another sprint

# COMMIT MESSAGES:

Commit messages should have a title and a more descriptive body

---

If using command-line Git:

-   Adding a feature: git commit -m "feat: <message>" -m "<message>"
    Example: git commit -m "feat: new homepage" -m "added basic files for the homepage"

-   Bugfixing: git commit -m "fix: <message> <relatedCommit>" -m "<message>"
    Example: git commit -m "fix: fixed broken css class from 2ebc23d" -m "fixed misspelled css class name myclas. Expected myClass"

-   Amend: git commit -m "amend: <message> <relatedCommit>"
    Example: git commit -m "amend: forgot to add image relative to commit a32d3g"

    Amend is a git feature, in this case we're using it as a standard commit
    to notify when a commit is just a quick fix or addition on top of a previous one.
    This makes it easier to see commits context and doing a bit of differentiation.

---

If using VS Code's Git GUI, separate title and body by putting a blank line between them.

Example:
feat: new homepage

added basic files for the homepage
