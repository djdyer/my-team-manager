function generateHTML(answers) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Team Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" media="screen" href="./style.css" />
      </head>
      <body>
        <header>
          <h1>My Team Manager</h1>
        </header>
        <main>
          <article class="card-border">
            <di class="card">
              <div class="header">
                <h2 id="employeeName">${answers.manager_name}</h2>
                <div class="iconTitle">
                  <img id="icon" src="../Assets/icons/manager_gradient.png" />
                  <h3 id="jobTitle">Team Manager</h3>
                </div>
              </div>
              <div class="details">
                <div class="labels">
                  <h4>ID:</h4>
                  <h4>Email:</h4>
                  <h4>Office #:</h4>
                </div>
                <div class="answers">
                  <h4 id="idNum">${answers.manager_id}</h4>
                  <h4 id="email">${answers.manager_email}</h4>
                  <h4 id="officeNum">${answers.manager_office}</h4>
                </div>
              </div>
            </div>
          </article>
        </main>
      </body>
    </html>
  `;
}

module.exports = generateHTML;
