// Required packages for application to run:
const inquirer = require("inquirer");
const fs = require("fs");
const generateCSS = require("./generateStyle.js");
const generateManager = require("./manager.js");
const inquirerEngineer = require("./engineer.js");
// const generateEngineer = require("./engineer.js");
const inquirerDesigner = require("./designer.js");
// const generateDesigner = require("./designer.js");
const inquirerIntern = require("./intern.js");
// const generateIntern = require("./intern.js");

// class Employee {
//   constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//   }
// }
// module.exports = Employee;

// First object prompts for team manager info
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
    type: "input",
    message: "What is the Team Manager's office number?",
    name: "manager_office",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finished"],
    name: "employee_type",
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
    if (answers.employee_type === "Engineer") {
      inquirerEngineer();
    } else if (answers.employee_type === "Designer") {
      inquirerDesigner();
    } else if (answers.employee_type === "Intern") {
      inquirerIntern();
    } else {
      // closeHTML();
    }
  });
}

startTeam();

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

// function closeHTML() {
//   const closeHTML = `</main></body></html>`;
//   fs.reWriteFile("index.html", closeHTML, function (err) {
//       if (err) {
//         console.log(err);
//       }
//     });
// }
