const inquirer = require("inquirer");
const Employee = require("./employee");

// Prompts to complete Engineer card
const engineerPrompts = [
  {
    type: "input",
    message: "What is your Engineer's name??",
    name: "name",
  },
  {
    type: "number",
    message: "The is your Engineer's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Engineer's GitHub username?",
    name: "github",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finished"],
    name: "type",
  },
];

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
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
  getGithub() {
    return this.github;
  }
}

const engineer = new Engineer(name, id, email, github);

function generateEngineer(engineer) {
  return `
    <article class="card-border">
      <di class="card">
        <div class="header">
          <img id="icon" src="../Assets/icons/engineer_gradient.png" />
          <div class="nameTitle">
          <h2>${this.name}</h2>
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
            <h4>${this.id}</h4>
            <h4><a href="mailto:${this.email}">${this.email}</a></h4>
            <h4><a href="https://www.github.com/${this.github}" target="_blank">${this.github}</a></h4>
          </div>
        </div>
      </div>
    </article>
  `;
}

module.exports = { Engineer };
