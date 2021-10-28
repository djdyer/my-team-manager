const inquirer = require("inquirer");

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
  {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Designer", "Intern", "Finished"],
    name: "employee_type",
  },
];

function inquirerDesigner() {
  inquirer
    .prompt(designerPrompts)
    .then((answersDesigner) => generateDesigner(answersDesigner));
  if (answersDesigner.employee_type === "Engineer") {
    inquirerEngineer();
  } else if (answersDesigner.employee_type === "Designer") {
    inquirerDesigner();
  } else if (answersDesigner.employee_type === "Intern") {
    inquirerIntern();
  } else {
    // closeHTML();
  }
}

function generateDesigner(answersDesigner) {
  return `
    <article class="card-border">
    <di class="card">
        <div class="header">
        <img id="icon" src="../Assets/icons/designer_gradient.png" />
        <div class="nameTitle">
        <h2>${answersDesigner.designer_name}</h2>
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
            <h4>${answersDesigner.designer_id}</h4>
            <h4><a href="mailto:${answersDesigner.designer_email}">${answersDesigner.designer_email}</a></h4>
            <h4><a href="${answersDesigner.designer_portfolio}" target="_blank"></a></h4>
        </div>
        </div>
    </div>
    </article>
    `;
}

module.exports = generateDesigner;
module.exports = inquirerDesigner;
