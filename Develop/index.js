// Required packages for application to run:
const inquirer = require("inquirer");
const fs = require("fs");
const generateCSS = require("./generateStyle.js");
const generateManager = require("./Classes/manager.js");
const Employee = require("./Classes/employee.js");
// const inquirerEngineer = require("./engineer.js");
// const generateEngineer = require("./engineer.js");
// const inquirerDesigner = require("./designer.js");
// const generateDesigner = require("./designer.js");
// const inquirerIntern = require("./intern.js");
// const generateIntern = require("./intern.js");

// Function to initialize app

function startTeam() {
  inquirer.prompt(managerPrompts).then((manager) => {
    console.log(manager);
    const style = generateCSS();
    const html = generateManager(manager);
    fs.writeFile("style.css", style, function (err) {
      if (err) {
        console.log(err);
      }
    });
    fs.writeFile("index.html", html, function (err) {
      if (err) {
        console.log(err);
      }
    });
    switch (answers.employee_type) {
      case "Engineer":
        inquirerEngineer();
        break;
      case "Designer":
        inquirerDesigner();
        break;
      case "Intern":
        inquirerIntern();
        break;
      default:
        // closeHTML();
        break;
    }
  });
}

startTeam();

// function addEngineer(answersEngineer) {
//   console.log(answersEngineer);
//   const engineer = generateEngineer(answersEngineer);
//   fs.appendFile("index.html", engineer, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

// function addDesigner(answersDesigner) {
//   console.log(answersDesigner);
//   const designer = generateDesigner(answersDesigner);
//   fs.appendFile("index.html", designer, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

// function addIntern(answersIntern) {
//   console.log(answersIntern);
//   const intern = generateIntern(answersIntern);
//   fs.appendFile("index.html", intern, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

// module.exports = addEngineer;
// module.exports = addDesigner;
// module.exports = addIntern;

// function closeHTML() {
//   const closeHTML = `</main></body></html>`;
//   fs.appendFile("index.html", closeHTML, function (err) {
//       if (err) {
//         console.log(err);
//       }
//     });
// }
