const inquirer = require("inquirer");
const Employee = require("./employee");

// Prompts to complete Intern card
const internPrompts = [
  {
    type: "input",
    message: "What is your Intern's name??",
    name: "name",
  },
  {
    type: "number",
    message: "The is your Intern's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Intern's school?",
    name: "school",
  },
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finished"],
    name: "employee_type",
  },
];

class Intern extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.school = school;
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
  getSchool() {
    return this.school;
  }
}

const intern = new Intern(name, id, email, github);

function generateIntern(intern) {
  return `
    <article class="card-border">
        <di class="card">
        <div class="header">
            <img id="icon" src="../Assets/icons/designer_gradient.png" />
            <div class="nameTitle">
            <h2>${this.name}</h2>
            <h3>Intern</h3>
            </div>
        </div>
        <div class="details">
            <div class="labels">
            <h4>ID:</h4>
            <h4>Email:</h4>
            <h4>School:</h4>
            </div>
        <div class="answersIntern">
            <h4>${this.id}</h4>
            <h4><a href="mailto:${this.email}">${this.email}</a></h4>
            <h4>${this.school}</h4>
            </div>
        </div>
        </div>
    </article>
`;
}

module.exports = { Intern };
