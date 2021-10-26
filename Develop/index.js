// Required packages for application to run:
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./logger.js");
const generateCSS = require("./generateStyle.js");

// Object arrays for all employee types
const managerPrompts = [
  {
    type: "input",
    message: "What is the Team Manager's name?",
    name: "manager_name",
  },
  {
    type: "input",
    message: "The is the Team Manager's employee ID?",
    name: "manager_id",
  },
  {
    type: "input",
    message: "What is the Team Manager's email address?",
    name: "manager_email",
  },
  {
    type: "input",
    message: "What is the Team Manager's office number?",
    name: "manager_office",
  },
];

const addTeam = [
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finish"],
    name: "employee_type",
  },
];

const engineerPrompts = [
  {
    type: "input",
    message: "What is your Engineer's name??",
    name: "engineer_name",
  },
  {
    type: "input",
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

const designerPrompts = [
  {
    type: "input",
    message: "What is your Designer's name??",
    name: "designer_name",
  },
  {
    type: "input",
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

const internPrompts = [
  {
    type: "input",
    message: "What is your Intern's name??",
    name: "intern_name",
  },
  {
    type: "input",
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
function buildTeam() {
  inquirer.prompt(managerPrompts).then((answers) => {
    console.log(answers);
    const style = generateCSS();
    const markup = generateHTML(answers);
    fs.writeFile("style.css", style, function (err) {
      if (err) {
        console.log(err);
      }
    });
    fs.writeFile("index.html", markup, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

// Call to initialize app
buildTeam();
