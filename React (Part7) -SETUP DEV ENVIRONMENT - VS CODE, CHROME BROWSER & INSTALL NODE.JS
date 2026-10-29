SETUP DEV ENVIRONMENT - VS CODE, CHROME BROWSER & INSTALL NODE.JS

================================================================================

PART 1: OVERVIEW OF THE LESSON

================================================================================

What You'll Learn

This lesson covers setting up a local development environment for React development.

Topic                 | What You'll Learn
----------------------|----------------------------------------------
Required Tools        | Tools needed for local React development
VS Code               | How to install and verify VS Code
Google Chrome         | How to install and verify Chrome
Node.js               | How to install and verify Node.js
npm                   | How npm works with Node.js
Verification          | Verify installations using terminal commands
System Requirements   | Basic requirements for each tool
Development Workflow  | How all tools work together


================================================================================

WHY SET UP A DEVELOPMENT ENVIRONMENT?

================================================================================

So far, you have been using CodeSandbox, an online development environment.

A local environment allows you to:

Write React code on your own computer.
Have full control over the project.
Use professional development tools.
Build production-ready applications.
Work offline where possible.
Manage dependencies locally.
Prepare applications for deployment.
CodeSandbox vs Local Development
CodeSandbox                       | Local Development
----------------------------------|----------------------------------
Runs mainly in browser            | Runs on your computer
Minimal local setup               | Local tools must be installed
Online project environment        | Local project files
Dependencies handled by platform  | Dependencies managed locally
Useful for learning/testing       | Full development control


================================================================================

PART 2: THE THREE ESSENTIAL TOOLS

================================================================================

Tool           | Main Purpose
---------------|---------------------------------------------
VS Code        | Write and edit React code
Google Chrome  | Run, test and debug the application
Node.js        | Run JavaScript tooling outside the browser
npm            | Install/manage project dependencies


================================================================================

TOOL 1: VISUAL STUDIO CODE - VS CODE

================================================================================

What is VS Code?

Visual Studio Code is a source-code editor created by Microsoft.

It provides:

Lightweight code editing.
Support for many programming languages.
Extensions.
Debugging capabilities.
Integrated terminal support.
Git/source-control integration.
Why Use VS Code?
Feature             | Benefit
--------------------|--------------------------------------
Lightweight         | Fast development environment
React Support       | Suitable for JavaScript/React work
Debugging           | Built-in debugging capabilities
Extensions          | Add language/tool integrations
Cross-platform      | Windows, macOS and Linux
Cost                | Free


================================================================================

TOOL 2: GOOGLE CHROME

================================================================================

What is Google Chrome?

Google Chrome is a web browser that can be used to run and test React applications.

For developers, an important feature is Chrome DevTools.

Why Chrome?
Feature             | Benefit
--------------------|-----------------------------------------
Browser             | Runs your web application
Developer Tools     | Inspect and debug pages
Console             | View JavaScript logs/errors
Network Tools       | Inspect HTTP/API requests
Testing             | Test application behavior
Performance Tools   | Analyze browser-side performance


================================================================================

TOOL 3: NODE.JS

================================================================================

What is Node.js?

Node.js is a JavaScript runtime that allows JavaScript to run outside a web browser.

For React development, Node.js is commonly used to run:

Development tooling.
Package-management commands.
Build tools.
Local development servers.
JavaScript-based project scripts.

Node.js installations normally include npm, the Node Package Manager.

Why Node.js?
Purpose                 | Description
------------------------|------------------------------------------
JavaScript Runtime      | Runs JavaScript outside the browser
npm                     | Provides package-management tooling
Dependencies            | Helps install project packages
Development Tools       | Runs React-related build/dev tooling
Project Scripts         | Runs commands defined by the project
Development Server      | Can support local development servers


================================================================================

PART 3: INSTALLATION GUIDE

================================================================================

Step 1: Install Visual Studio Code
Installation Steps
Step | Action
-----|----------------------------------------------------------
1    | Open your web browser
2    | Search for "VS Code"
3    | Open the official Visual Studio Code website
4    | Choose the appropriate download
5    | Select your operating system
6    | Download the installer
7    | Run the installer
8    | Follow the installation wizard
9    | Complete installation
10   | Open VS Code


Official site:

Download Visual Studio Code

Operating Systems
Operating System | Common Options
-----------------|----------------------------------
Windows          | Windows-compatible installer
macOS            | Intel / Apple Silicon as applicable
Linux            | Supported Linux packages/options

After Installation
VS Code is installed locally.
Open it from your applications/programs.
The welcome/start screen appears.
You are ready to create or open a project.

================================================================================

Step 2: Install Google Chrome

================================================================================

Installation Steps
Step | Action
-----|------------------------------------------------
1    | Open your current browser
2    | Search for "Download Google Chrome"
3    | Open the official Chrome website
4    | Click the download option
5    | Choose the appropriate operating-system build
6    | Download the installer
7    | Run the installer
8    | Follow the installation instructions
9    | Complete installation
10   | Open Google Chrome


Official site:

Download Google Chrome

After Installation

Use Chrome to:

Run React applications.
Test browser behavior.
Inspect pages.
Open the JavaScript console.
Debug application issues.
Inspect network requests.

================================================================================

Step 3: Install Node.js

================================================================================

Node.js Release Options

The Node.js website provides different release lines.

For learning and typical application development, an LTS release is generally the normal choice because it focuses on long-term support.

Release Type   | Meaning
---------------|-------------------------------------------
LTS            | Long Term Support
Current        | Newer/current feature release line

Installation Steps
Step | Action
-----|------------------------------------------------
1    | Open your browser
2    | Search for "Download Node.js"
3    | Open the official Node.js website
4    | Choose an appropriate release
5    | Use LTS for the normal learning setup
6    | Select the appropriate operating-system option
7    | Download the installer/package
8    | Run the installer
9    | Follow installation instructions
10   | Complete installation


Official site:

Download Node.js

After Installation
Installed Tool | Purpose
---------------|-------------------------------------------
Node.js        | JavaScript runtime
npm            | Package manager supplied with Node.js


You can now use the terminal to execute Node.js/npm commands.

================================================================================

PART 4: VERIFYING INSTALLATIONS

================================================================================

Verify Node.js

Open a terminal or command prompt.

Operating System | How to Access Terminal
-----------------|-----------------------------------------
Windows          | Command Prompt / PowerShell / Terminal
macOS            | Terminal
Linux            | Terminal


Run:

node -v


Example output:

v21.0.0


Your version may be different.

What node -v Means
Part     | Meaning
---------|------------------------------------------
node     | Runs the Node.js executable
-v       | Requests version information
Result   | Displays installed Node.js version


If Node.js cannot be found, the terminal may report that the command is not recognized/found.

================================================================================

VERIFY npm

================================================================================

npm normally comes with Node.js.

Run:

npm -v


Example output:

9.6.7


Your actual version may be different.

Command   | Purpose
----------|---------------------------------------
npm -v    | Display installed npm version
npm       | Node package-management CLI


npm is used to install and manage project packages/dependencies.

================================================================================

VERIFY VS CODE

================================================================================

Method 1: Open Normally
Step | Action
-----|------------------------------------
1    | Find VS Code in your applications
2    | Open VS Code
3    | Confirm the application starts
4    | VS Code is ready for use

Method 2: Terminal

If the code command has been configured and is available on your PATH:

code


This opens VS Code from the command line.

================================================================================

VERIFY GOOGLE CHROME

================================================================================

Step | Action
-----|--------------------------------------
1    | Find Google Chrome
2    | Open the application
3    | Confirm the browser window appears
4    | Chrome is ready for testing


================================================================================

PART 5: UNDERSTANDING HOW THE TOOLS WORK TOGETHER

================================================================================

Development Flow
Node.js
   ↓
npm
   ↓
Install / Manage Project Packages
   ↓
VS Code
   ↓
Write React Code
   ↓
Development Tool / Local Server
   ↓
Google Chrome
   ↓
Run, View and Debug Application

Role of Each Tool
Tool          | Role
--------------|---------------------------------------------
Node.js       | Executes JavaScript-based development tools
npm           | Manages packages and dependencies
VS Code       | Used to write/edit project files
Dev Server    | Serves application during development
Chrome        | Displays and debugs the application


================================================================================

NODE.JS AND npm RELATIONSHIP

================================================================================

Node.js
JavaScript runtime.
Runs JavaScript outside the browser.
Installed on your computer.
Supports development/build tooling.
npm
Node package manager.
Normally installed with Node.js.
Installs packages.
Manages dependencies.
Updates packages.
Removes packages.
Example
npm install react


This command tells npm to install the React package into the project according to npm's package-management rules.

Easy memory:

Node.js
→ Runs JavaScript tooling

npm
→ Manages packages

React
→ One package/library npm can install


================================================================================

PART 6: COMMON INSTALLATION ISSUES

================================================================================

Issue 1: node: command not found

Problem:

node -v


does not return a version.

Possible causes:

Possible Cause              | What to Check
----------------------------|------------------------------------
Node.js isn't installed     | Install Node.js
Installation incomplete     | Reinstall Node.js
Terminal session is old     | Restart terminal
PATH isn't configured       | Check Node installation/PATH


Possible troubleshooting steps:

Confirm Node.js was installed.
Restart the terminal.
Verify the installation path/PATH.
Reinstall Node.js if required.
Restart the computer if environment changes are not recognized.

================================================================================

Issue 2: Different Version Numbers

================================================================================

Your version may not match the examples.

Example:

Example Node.js → v21.0.0
Your Node.js    → Different version


Similarly:

Example npm → 9.6.7
Your npm    → Different version


Version numbers change over time.

The important verification point is that the command successfully returns the installed version.

================================================================================

Issue 3: Permission Denied - macOS/Linux

================================================================================

A package operation can sometimes fail because of file-system permissions.

The original example uses:

sudo npm install -g package-name


This executes the global npm command with elevated privileges.

Practical caution: Do not use sudo automatically for every npm permission problem. Modern Node.js setups often use an appropriate Node version manager or properly configured npm directories to avoid repeated elevated package installations.

================================================================================

PART 7: WHAT COMES NEXT

================================================================================

After all tools are installed, the next step is creating and running a React project.

Original Lesson Example: Create React Project
npx create-react-app my-app


Purpose:

Action                 | Description
-----------------------|----------------------------------------
Create project         | Creates project named "my-app"
Project files          | Generates application structure
Dependencies           | Installs required project dependencies
Starter Application    | Provides an initial React application


Revision note: This is the original lesson's Create React App workflow. For a current React setup, project tooling may differ, so treat this command as part of the lesson rather than a universal modern default.

Navigate to Project
cd my-app

Command   | Meaning
----------|--------------------------------
cd        | Change directory
my-app    | Project directory

Start Development Server

Original lesson command:

npm start


In the lesson's project setup, this:

Starts the development environment/server.
Runs the application locally.
Watches application files.
Reflects saved code changes during development.
Edit Code in VS Code
1. Open VS Code
      ↓
2. Open project folder
      ↓
3. Edit React files
      ↓
4. Save changes
      ↓
5. Development tooling rebuilds/updates
      ↓
6. Check changes in browser


================================================================================

PART 8: TERMINAL COMMANDS REFERENCE

================================================================================

Command                         | Purpose
--------------------------------|-------------------------------------------
node -v                         | Check installed Node.js version
npm -v                          | Check installed npm version
npx create-react-app my-app     | Original lesson: create "my-app"
cd my-app                       | Move into "my-app" directory
npm install                     | Install project dependencies
npm start                       | Original lesson: start dev environment
npm install package-name        | Install a specific npm package

Quick Command Flow
node -v


Check Node.js.

npm -v


Check npm.

npx create-react-app my-app


Create the project using the lesson's workflow.

cd my-app


Move into the project.

npm install


Install dependencies when required.

npm start


Run the lesson's development setup.

npm install package-name


Install another package.

================================================================================

PART 9: SYSTEM REQUIREMENTS

================================================================================

The original lesson lists the following baseline requirements:

Platform | Operating System              | RAM    | Disk Space | Processor
---------|-------------------------------|--------|------------|---------------------
Windows  | Windows 7 or later            | 2 GB   | 500 MB     | 64-bit
macOS    | OS X 10.11 or later           | 2 GB   | 500 MB     | Intel/Apple Silicon
Linux    | Ubuntu 16.04 or later/example | 2 GB   | 500 MB     | Not specified


Important: These requirements and OS versions are part of the original lesson material and can become outdated as VS Code, Chrome, and Node.js change their supported platforms. Check the current official requirements before installing on an older operating system.

================================================================================

PART 10: SUMMARY AND NEXT STEPS

================================================================================

What You've Learned
Topic                | What You've Learned
---------------------|---------------------------------------------
Development Setup    | Why a local environment is useful
VS Code              | Code editor used for development
Google Chrome        | Browser used to run/test web applications
Chrome DevTools      | Browser debugging tools
Node.js              | JavaScript runtime for local tooling
npm                  | Package/dependency manager
Installation         | General installation process
Verification         | node -v and npm -v
Terminal             | Basic project commands
Development Flow     | Node/npm → VS Code → Dev Server → Chrome
System Requirements  | Baseline requirements from the lesson


================================================================================

KEY TAKEAWAYS

================================================================================

No. | Key Takeaway
----|-----------------------------------------------------------------
1   | VS Code is a lightweight source-code editor
2   | Chrome provides browser developer/debugging tools
3   | Node.js allows JavaScript tooling to run outside the browser
4   | npm manages JavaScript packages and project dependencies
5   | Terminal commands are important for local development
6   | Use node -v to verify Node.js
7   | Use npm -v to verify npm
8   | VS Code, Node/npm and a browser work together during development
9   | Local setup provides greater project/development control
10  | Understanding these tools provides a foundation for React work


================================================================================

DEVELOPMENT ENVIRONMENT - EASY MEMORY

================================================================================

VS CODE
→ WRITE CODE


NODE.JS
→ RUN DEVELOPMENT TOOLING


npm
→ MANAGE PACKAGES


DEV SERVER
→ SERVE APPLICATION LOCALLY


CHROME
→ VIEW + TEST + DEBUG


Or remember:

WRITE → INSTALL → RUN → TEST → DEBUG

  VS Code
     ↓
    npm
     ↓
 Node.js Tooling
     ↓
 Dev Server
     ↓
   Chrome


================================================================================

INTERVIEW-READY QUICK TABLE

================================================================================

Question                     | Short Answer
-----------------------------|----------------------------------------------
What is VS Code?             | Source-code editor from Microsoft
What is Chrome used for?     | Run, inspect, test and debug web applications
What is Node.js?             | JavaScript runtime outside the browser
What is npm?                 | Package manager used in Node.js projects
Does npm come with Node.js?  | Normally yes
How to check Node version?   | node -v
How to check npm version?    | npm -v
What does npm install do?    | Installs project dependencies
What does cd my-app do?      | Moves terminal into my-app directory
What does npm install X do?  | Installs package X


================================================================================

NEXT STEPS

================================================================================

After completing this lesson:

Next Step               | Purpose
------------------------|--------------------------------------------
Verify Installations    | Make sure required tools work
Explore VS Code         | Learn editor, files and terminal
Explore Chrome DevTools | Learn Console, Elements and Network tools
Create React Project    | Start a local React application
Project Structure       | Understand project files/folders
npm                     | Understand packages and dependencies
Local Development       | Build and run React applications locally
Terminal Commands       | Become comfortable with CLI workflow


================================================================================

QUICK REFERENCE: INSTALLATION CHECKLIST

================================================================================

Status | Task
-------|----------------------------------------------------
[ ]    | Download VS Code from official Microsoft site
[ ]    | Install VS Code
[ ]    | Download Google Chrome from official Google site
[ ]    | Install Google Chrome
[ ]    | Download an appropriate Node.js release
[ ]    | Install Node.js
[ ]    | Open terminal
[ ]    | Run: node -v
[ ]    | Confirm Node.js version is displayed
[ ]    | Run: npm -v
[ ]    | Confirm npm version is displayed
[ ]    | Open VS Code
[ ]    | Confirm VS Code works
[ ]    | Open Google Chrome
[ ]    | Confirm Chrome works
[ ]    | Ready for local React development


================================================================================

FOLLOW-UP QUESTIONS

================================================================================

What is the difference between Node.js and npm, and how do they work together?

How do I create a new React project after setting up my development environment?

================================================================================
