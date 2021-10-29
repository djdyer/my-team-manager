const inquirer = require("inquirer");
const Employee = require("./employee");

// First object prompts for team manager info
const managerPrompts = [
  {
    type: "input",
    message: "What is the Team Manager's name?",
    name: "name",
  },
  {
    type: "number",
    message: "The is the Team Manager's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Team Manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Team Manager's office number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finished"],
    name: "employee_type",
  },
];

module.exports = managerPrompts;

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getOfficeNum() {
    return this.officeNumber;
  }
}

const manager = new Manager(name, id, email, officeNumber);

module.exports = manager;

function generateManager(manager) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Team Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" media="screen" href="./style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap" rel="stylesheet">
      </head>
      </head>
      <body>
        <header>
          <h1>My Team Manager</h1>
        </header>
        <main>
        
          <article class="card-border">
            <di class="card">
              <div class="header">
                <img id="icon" src="../Assets/icons/manager_gradient.png" />
                <div class="nameTitle">
                <h2>${this.name}</h2>
                <h3>Team Manager</h3>
                </div>
              </div>
              <div class="details">
                <div class="labels">
                  <h4>ID:</h4>
                  <h4>Email:</h4>
                  <h4>Office #:</h4>
                </div>
                <div class="this">
                  <h4>${this.id}</h4>
                  <h4><a href="mailto:${this.email}">${this.email}</a></h4>
                  <h4>${this.officeNumber}</h4>
                </div>
              </div>
            </div>
          </article>
  `;
}

module.exports = managerPrompts;
module.exports = generateManager;
