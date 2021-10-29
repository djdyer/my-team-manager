const inquirer = require("inquirer");
const Employee = require("./employee");

// Prompts to complete Designer card
const designerPrompts = [
  {
    type: "input",
    message: "What is your Designer's name??",
    name: "name",
  },
  {
    type: "number",
    message: "The is your Designer's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Designer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Designer's portfolio link?",
    name: "portfolio",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finished"],
    name: "employee_type",
  },
];

class Designer extends Employee {
  constructor(name, id, email, portfolio) {
    super(name, id, email);
    this.portfolio = portfolio;
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
  getPortfolio() {
    return this.portfolio;
  }
}

const designer = new Designer(name, id, email, github);

function generateDesigner(answersDesigner) {
  return `
    <article class="card-border">
    <di class="card">
        <div class="header">
        <img id="icon" src="../Assets/icons/designer_gradient.png" />
        <div class="nameTitle">
        <h2>${this.name}</h2>
        <h3>Designer</h3>
        </div>
        </div>
        <div class="details">
        <div class="labels">
            <h4>ID:</h4>
            <h4>Email:</h4>
            <h4>Portfolio:</h4>
        </div>
        <div class="answersDesigner">
            <h4>${this.id}</h4>
            <h4><a href="mailto:${this.email}">${this.email}</a></h4>
            <h4><a href="${this.portfolio}" target="_blank"></a></h4>
        </div>
        </div>
    </div>
    </article>
    `;
}

module.exports = { Designer };
