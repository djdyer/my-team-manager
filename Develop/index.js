// Required packages for application to run:
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Designer = require("./lib/designer");
const Intern = require("./lib/intern");

let team = [];

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
    name: "employee_type",
  },
];

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

function init() {
  startPage();
  managerFirst();
}

// Function to initialize app
function startPage() {
  const style = `* {
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #051014;
    height: 100vh;
    place-items: center;
  }
  
  header {
    height: 150px;
    background-color: #2e2f2f;
    text-align: center;
    width: 100%;
  }
  
  h1 {
    padding-top: 50px;
  }
  
  h1,
  h2 {
    font-family: "Comfortaa", cursive;
    color: #42bfdd;
    margin-bottom: 10px;
  }
  
  h4 {
    font-family: "Comfortaa", cursive;
    color: #f0f6f6;
    padding: 15px 0;
    text-decoration: none;
  }

  a {
    color: #f0f6f6;
    text-decoration: none;
  }
  
  h3 {
    font-family: "Comfortaa", cursive;
    color: #7b79e2;
  }
  
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-top: 50px;
    justify-content: center;
  }
  
  article,
  .labels,
  .answers {
    display: flex;
    flex-direction: column;
  }
  
  .card-border {
    width: 380px;
    height: fit-content;
    padding: 1rem;
    position: relative;
    background: linear-gradient(to right, #42bfdd, #7b79e2);
    border-radius: 10pt;
    box-shadow: 0px 5px 30px rgb(0, 0, 0);
    padding: 3px;
    margin: 20px 30px 30px 10px;
  }
  
  .card {
    background: #051014;
    padding: 2rem;
    border-radius: 10pt;
  }
  
  .header {
    display: flex;
    flex-direction: row;
    padding: 20px 0;
  }
  
  .details {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
  .nameTitle {
    display: flex;
    flex-direction: column;
  }
  
  #icon {
    width: 55px;
    height: auto;
    margin: 0 30px 0 10px;
  }
`;
  fs.writeFile("./dist/style.css", style, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function managerFirst() {
  inquirer.prompt(managerPrompts).then((answers) => {
    var manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);
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
      case "Finished":
        createHTML();
        break;
    }
  });
}

function inquirerEngineer() {
  inquirer.prompt(engineerPrompts).then((answers) => {
    var engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.gitHub
    );
    team.push(engineer);
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
      case "Finished":
        createHTML();
        break;
    }
  });
}

function inquirerDesigner() {
  inquirer.prompt(designerPrompts).then((answers) => {
    var designer = new Designer(
      answers.name,
      answers.id,
      answers.email,
      answers.portfolio
    );
    team.push(designer);
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
      case "Finished":
        createHTML();
        break;
    }
  });
}

function inquirerIntern() {
  inquirer.prompt(internPrompts).then((answers) => {
    var intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    team.push(intern);
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
      case "Finished":
        createHTML();
        break;
    }
  });
}

init();

function createHTML() {
  var body = "";
  for (var i = 0; i < team.length; i++) {
    if (team[i].getRole() === "manager") {
      body += createManagerHTML(team[i]);
    } else if (team[i].getRole() === "engineer") {
      body += createEngineerHTML(team[i]);
    } else if (team[i].getRole() === "designer") {
      body += createDesignerHTML(team[i]);
    } else if (team[i].getRole() === "intern") {
      body += createInternHTML(team[i]);
    }
    var HTML = `<!DOCTYPE html>
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
    <body>
      <header>
        <h1>My Team Manager</h1>
      </header>
      <main>${body}</main></body></html>`;
    fs.writeFile("./dist/index.html", HTML, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
}

function createManagerHTML(manager) {
  return `<article class="card-border">
    <div class="card">
      <div class="header">
        <img id="icon" src="../../Assets/icons/manager_gradient.png" />
        <div class="nameTitle">
        <h2>${manager.name}</h2>
        <h3>Team Manager</h3>
        </div>
      </div>
      <div class="details">
        <div class="labels">
          <h4>ID:</h4>
          <h4>Email:</h4>
          <h4>Office #</h4>
        </div>
        <div class="this">
          <h4>${manager.id}</h4>
          <h4><a href="mailto:${manager.email}">${manager.email}</a></h4>
          <h4>${manager.officeNumber}</h4>
        </div>
      </div>
    </div>
  </article>`;
}

function createEngineerHTML(engineer) {
  return `<article class="card-border">
    <div class="card">
      <div class="header">
        <img id="icon" src="../../Assets/icons/engineer_gradient.png" />
        <div class="nameTitle">
        <h2>${engineer.name}</h2>
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
          <h4>${engineer.id}</h4>
          <h4><a href="mailto:${engineer.email}">${engineer.email}</a></h4>
          <h4><a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></h4>
        </div>
      </div>
    </div>
  </article>`;
}

function createDesignerHTML(designer) {
  return `<article class="card-border">
  <div class="card">
    <div class="header">
      <img id="icon" src="../../Assets/icons/designer_gradient.png" />
      <div class="nameTitle">
      <h2>${designer.name}</h2>
      <h3>Designer</h3>
      </div>
    </div>
    <div class="details">
      <div class="labels">
        <h4>ID:</h4>
        <h4>Email:</h4>
        <h4>Portfolio:</h4>
      </div>
      <div class="answers">
        <h4>${designer.id}</h4>
        <h4><a href="mailto:${designer.email}">${designer.email}</a></h4>
        <h4><a href="${designer.portfolio}" target="_blank"></a></h4>
      </div>
    </div>
  </div>
</article>`;
}

function createInternHTML(intern) {
  return `<article class="card-border">
  <div class="card">
    <div class="header">
      <img id="icon" src="../../Assets/icons/intern_gradient.png" />
      <div class="nameTitle">
      <h2>${answers.name}</h2>
      <h3>Intern</h3>
      </div>
    </div>
    <div class="details">
      <div class="labels">
        <h4>ID:</h4>
        <h4>Email:</h4>
        <h4>School:</h4>
      </div>
      <div class="answers">
        <h4>${answers.id}</h4>
        <h4><a href="mailto:${answers.email}">${answers.email}</a></h4>
        <h4>${answers.school}</h4>
      </div>
    </div>
  </div>
</article>`;
}
