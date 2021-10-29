// Required packages for application to run:
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Designer = require("./lib/designer");
const Intern = require("./lib/intern");

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
    name: "type",
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
    width: 350px;
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
  const html = `<!DOCTYPE html>
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
`;
  fs.writeFile("./dist/style.css", style, function (err) {
    if (err) {
      console.log(err);
    }
  });
  fs.writeFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function managerFirst() {
  inquirer.prompt(managerPrompts).then((answers) => {
    console.log(answers);
    const manager = `<article class="card-border">
    <di class="card">
      <div class="header">
        <img id="icon" src="../../Assets/icons/manager_gradient.png" />
        <div class="nameTitle">
        <h2>${answers.name}</h2>
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
          <h4>${answers.id}</h4>
          <h4><a href="mailto:${answers.email}">${answers.email}</a></h4>
          <h4>${answers.officeNumber}</h4>
        </div>
      </div>
    </div>
  </article>
`;
    fs.appendFile("./dist/index.html", manager, function (err) {
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

function inquirerEngineer() {
  inquirer.prompt(engineerPrompts).then((answers) => {
    console.log(answers);
    const engineer = `<article class="card-border">
    <di class="card">
      <div class="header">
        <img id="icon" src="../../Assets/icons/engineer_gradient.png" />
        <div class="nameTitle">
        <h2>${answers.name}</h2>
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
          <h4>${answers.id}</h4>
          <h4><a href="mailto:${answers.email}">${answers.email}</a></h4>
          <h4><a href="https://www.github.com/${answers.github}" target="_blank">${answers.github}</a></h4>
        </div>
      </div>
    </div>
  </article>
`;
    fs.appendFile("./dist/index.html", engineer, function (err) {
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
        closeHTML();
        break;
    }
  });
}

function inquirerDesigner() {
  inquirer.prompt(designerPrompts).then((answers) => {
    console.log(answers);
    const designer = `<article class="card-border">
    <di class="card">
      <div class="header">
        <img id="icon" src="../../Assets/icons/designer_gradient.png" />
        <div class="nameTitle">
        <h2>${answers.name}</h2>
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
          <h4>${answers.id}</h4>
          <h4><a href="mailto:${answers.email}">${answers.email}</a></h4>
          <h4><a href="${answers.portfolio}" target="_blank"></a></h4>
        </div>
      </div>
    </div>
  </article>
`;
    fs.appendFile("./dist/index.html", designer, function (err) {
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
        closeHTML();
        break;
    }
  });
}

function inquirerIntern() {
  inquirer.prompt(internPrompts).then((answers) => {
    console.log(answers);
    const intern = `<article class="card-border">
    <di class="card">
      <div class="header">
        <img id="icon" src="../../Assets/icons/intern.png" />
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
          <h4>${answers.school}</h4>;
        </div>
      </div>
    </div>
  </article>
`;
    fs.appendFile("./dist/index.html", intern, function (err) {
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
        closeHTML();
        break;
    }
  });
}

function closeHTML() {
  const closeHTML = `</main></body></html>`;
  fs.appendFile("./dist/index.html", closeHTML, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

init();
