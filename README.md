# my-team-manager

<br />

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [User Story](#user-story)
- [License](#license)
- [Screenshots/Demo](#screenshots-demo)
- [Criteria](#acceptance-criteria)
- [Collaboration](#collaboration)

<br />

## Description

A Node.js command-line application that accepts user information about employees on software engineering team, and then generates an HTML webpage that displays a summary of each team member.

<br />

## Installation

Application uses [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input and will run with npm install. Must type 'node index' in command-line to initialize.

<br />

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

<br />

## License

<br />
ISC License  
Copyright (c) David Dyer [2021]  
[![](Assets/icons/isc.svg)](./Develop/license.txt)

<br />

## Screenshots / Demo

(Must show all tests passing from the command line.)
<br />

## Acceptance Criteria

```
Command-line application accepts user input.

Team Manager initializes app by providing name, employee ID, email address, and office number.

Then is presented with menu to add more team members or finish building team.

When selecting the Engineer option, is prompted to provide name, employee ID, email address and github.

When selecting the Designer option, is prompted to provide name, employee ID, email address and porfolio link.

When selecting the Intern option, is prompted to provide name, employee ID, email address, and school.

After finishing team, an HTML file is generated to display all details.

Email address clicks to populate default email program with TO field loaded.

GitHub username clicks to open profile in new tab.

```

<br />

## Testing

Application uses [Jest](https://www.npmjs.com/package/jest) for running all unit tests.

## Collaboration

Development efforts most often include guidance from Jedi Master: **Chris Champness**

[![](https://avatars.githubusercontent.com/u/87551272?v=4?width=100&button=false)](https://github.com/CChampness)

**Reporting issues**:  
Contact @djdyer to report bugs.

**Contributions**:  
Clone branch, submit pull request for review after completing any improvements.

<br />

Thanks for taking a look!  
👋
