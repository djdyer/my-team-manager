const inquirer = require("inquirer");

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
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finished"],
    name: "employee_type",
  },
];

function inquirerIntern() {
  inquirer
    .prompt(internPrompts)
    .then((answersIntern) => generateIntern(answersIntern));
  if (answersIntern.employee_type === "Engineer") {
    inquirerEngineer();
  } else if (answersIntern.employee_type === "Designer") {
    inquirerDesigner();
  } else if (answersIntern.employee_type === "Intern") {
    inquirerIntern();
  } else {
    // closeHTML();
  }
}

function generateIntern(answersIntern) {
  return `
    <article class="card-border">
        <di class="card">
        <div class="header">
            <img id="icon" src="../Assets/icons/designer_gradient.png" />
            <div class="nameTitle">
            <h2>${answersIntern.intern_name}</h2>
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
            <h4>${answersIntern.intern_id}</h4>
            <h4><a href="mailto:${answersIntern.intern_email}">${answersIntern.intern_email}</a></h4>
            <h4>${answersIntern.intern_school}</h4>
            </div>
        </div>
        </div>
    </article>
`;
}

module.exports = generateIntern;
module.exports = inquirerIntern;
