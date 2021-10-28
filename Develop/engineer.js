const inquirer = require("inquirer");
const addEngineer = require("./index.js");
// const Employee = require("./index.js");

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
    message: "What is your Engineer's GitHub username?",
    name: "engineer_github",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finished"],
    name: "employee_type",
  },
];

function inquirerEngineer() {
  inquirer
    .prompt(engineerPrompts)
    .then((answersEngineer) => generateEngineer(answersEngineer));
  switch (answersEngineer.employee_type) {
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
}

// class Engineer extends Employee {
//   constructor(name, id, email, github) {
//     super(name, id, email);
//     this.github = github;
//   }
//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getGithub() {
//     return this.github;
//   }
// }

// const engineer = new Engineer(name, id, email, github);

function generateEngineer(answersEngineer) {
  return `
    <article class="card-border">
      <di class="card">
        <div class="header">
          <img id="icon" src="../Assets/icons/engineer_gradient.png" />
          <div class="nameTitle">
          <h2>${answersEngineer.engineer_name}</h2>
          <h3>Engineer</h3>
          </div>
        </div>
        <div class="details">
          <div class="labels">
            <h4>ID:</h4>
            <h4>Email:</h4>
            <h4>GitHub:</h4>
          </div>
          <div class="answers">
            <h4>${answersEngineer.engineer_id}</h4>
            <h4><a href="mailto:${answersEngineer.engineer_email}">${answersEngineer.engineer_email}</a></h4>
            <h4><a href="https://www.github.com/${answersEngineer.engineer_github}" target="_blank">${answersEngineer.engineer_github}</a></h4>
          </div>
        </div>
      </div>
    </article>
  `;
}

module.exports = generateEngineer;
module.exports = inquirerEngineer;
