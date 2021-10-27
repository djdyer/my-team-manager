// Required packages for application to run:
const inquirer = require("inquirer");
const fs = require("fs");
const generateManager = require("./manager.js");
const generateCSS = require("./generateStyle.js");
// const generateEngineer = require("./engineer.js");
// const generateDesigner = require("./designer.js");
// const generateIntern = require("./intern.js");

// Object arrays for all employee types
// First object is prompts for team manager card
const managerPrompts = [
  {
    type: "input",
    message: "What is the Team Manager's name?",
    name: "manager_name",
  },
  {
    type: "number",
    message: "The is the Team Manager's employee ID?",
    name: "manager_id",
  },
  {
    type: "input",
    message: "What is the Team Manager's email address?",
    name: "manager_email",
  },
  {
    type: "number",
    message: "What is the Team Manager's office number?",
    name: "manager_office",
  },
];

// Second object is SINGLE / MULTI-CHOICE prompt to add new team members or finish
const addTeam = [
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finish"],
    name: "employee_type",
  },
];

// Prompts to complete Engineer card
const engineerPrompts = [
  {
    type: "input",
    message: "What is your Engineer's name??",
    name: "engineer_name",
  },
  {
    type: "number",
    message: "The is your Engineer's employee ID?",
    name: "engineer_id",
  },
  {
    type: "input",
    message: "What is your Engineer's email address?",
    name: "engineer_email",
  },
  {
    type: "input",
    message: "What is your Engineer's GitHub?",
    name: "engineer_github",
  },
];

// Prompts to complete Designer card
const designerPrompts = [
  {
    type: "input",
    message: "What is your Designer's name??",
    name: "designer_name",
  },
  {
    type: "number",
    message: "The is your Designer's employee ID?",
    name: "designer_id",
  },
  {
    type: "input",
    message: "What is your Designer's email address?",
    name: "designer_email",
  },
  {
    type: "input",
    message: "What is your Designer's portfolio link?",
    name: "designer_portfolio",
  },
];

// Prompts to complete Intern card
const internPrompts = [
  {
    type: "input",
    message: "What is your Intern's name??",
    name: "intern_name",
  },
  {
    type: "number",
    message: "The is your Intern's employee ID?",
    name: "intern_id",
  },
  {
    type: "input",
    message: "What is your Intern's email address?",
    name: "intern_email",
  },
  {
    type: "input",
    message: "What is your Intern's school?",
    name: "intern_school",
  },
];

// Function to initialize app
function startTeam() {
  inquirer.prompt(managerPrompts).then((answers) => {
    console.log(answers);
    const style = generateCSS();
    const manager = generateManager(answers);
    fs.writeFile("style.css", style, function (err) {
      if (err) {
        console.log(err);
      }
    });
    fs.writeFile("index.html", manager, function (err) {
      if (err) {
        console.log(err);
      }
    });
    // return buildTeam();
  });
}

// Call to initialize app
startTeam();

// Function to build team
// function buildTeam() {
//   inquirer.prompt(addTeam).then((answer) => {
//     console.log(answer);
//   });
// }

// Call to build team
// buildTeam();

// function addEngineer() {
//   inquirer.prompt(engineerPrompts).then((answers) => {
//     console.log(answers);
//     const engineer = generateEngineer(answers);
//     fs.reWriteFile("index.html", engineer, function (err) {
//       if (err) {
//         console.log(err);
//       }
//     });
//   });
// }
// addEngineer();

// function addDesigner() {
//   inquirer.prompt(designerPrompts).then((answers) => {
//     console.log(answers);
//     const designer = generateDesigner(answers);
//     fs.reWriteFile("index.html", designer, function (err) {
//       if (err) {
//         console.log(err);
//       }
//     });
//   });
// }
// addDesigner();

// function addIntern() {
//   inquirer.prompt(internPrompts).then((answers) => {
//     console.log(answers);
//     const intern = generateIntern(answers);
//     fs.reWriteFile("index.html", intern, function (err) {
//       if (err) {
//         console.log(err);
//       }
//     });
//   });
// }
// addIntern();
