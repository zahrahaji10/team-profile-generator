// import inquirer into this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// declare questions objects array using inquirer

// user asked to select team name
const teamNameQuestion = {
  message: "Please enter the team name",
  type: "input",
  name: "teamName",
  // validate that user entered a team name
  validate: (enteredTeamName) => {
    if (enteredTeamName) {
      return true;
    } else {
      return "Please enter a title for your team to continue";
    }
  },
};

// choice questions

const choiceQuestion = {
  message: "What would you like to do next?",
  type: "list",
  name: "action",
  choices: [
    {
      name: "Add an engineer",
      value: "engineer",
    },
    {
      name: "Add an intern",
      value: "intern",
    },
    {
      name: "Exit",
      value: "exit",
    },
  ],
};

// manager questions array
const managerQuestions = [
  {
    message: "Please enter the name of the manager",
    type: "input",
    name: "name",
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return "Please enter the name to continue";
      }
    },
  },
  {
    message: "Please enter the ID number",
    type: "input",
    name: "id",
    validate: (enteredId) => {
      if (enteredId) {
        return true;
      } else {
        return "Please enter the name to continue";
      }
    },
  },
  {
    message: "Please enter the email address ",
    type: "input",
    name: "email",
    validate: (enteredEmail) => {
      if (enteredEmail) {
        return true;
      } else {
        return "Please enter the email address to continue";
      }
    },
  },
  {
    message: "Please enter the office number",
    type: "input",
    name: "officeNumber",
    validate: (enteredOfficeNumber) => {
      if (enteredOfficeNumber) {
        return true;
      } else {
        return "Please enter the office number to continue";
      }
    },
  },
];

// engineer questions array
const engineerQuestions = [
  {
    message: "Please enter the name of the engineer",
    type: "input",
    name: "name",
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return "Please enter the name to continue";
      }
    },
  },
  {
    message: "Please enter the ID number",
    type: "input",
    name: "id",
    validate: (enteredId) => {
      if (enteredId) {
        return true;
      } else {
        return "Please enter the ID number to continue";
      }
    },
  },
  {
    message: "Please enter the email address ",
    type: "input",
    name: "email",
    validate: (enteredEmail) => {
      if (enteredEmail) {
        return true;
      } else {
        return "Please enter the email address to continue";
      }
    },
  },
  {
    message: "Please enter the github username",
    type: "input",
    name: "github",
    validate: (enteredGithub) => {
      if (enteredGithub) {
        return true;
      } else {
        return "Please enter the github username to continue";
      }
    },
  },
];

// intern questions array
const internQuestions = [
  {
    message: "Please enter the name of intern",
    type: "input",
    name: "name",
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return "Please enter the name to continue";
      }
    },
  },
  {
    message: "Please enter the ID number",
    type: "input",
    name: "id",
    validate: (enteredId) => {
      if (enteredId) {
        return true;
      } else {
        return "Please enter the ID number to continue";
      }
    },
  },
  {
    message: "Please enter the email address ",
    type: "input",
    name: "email",
    validate: (enteredEmail) => {
      if (enteredEmail) {
        return true;
      } else {
        return "Please enter the email address to continue";
      }
    },
  },
  {
    message: "Please enter the school name",
    type: "input",
    name: "school",
    validate: (enteredSchool) => {
      if (enteredSchool) {
        return true;
      } else {
        return "Please enter the school name to continue";
      }
    },
  },
];

const generateHTML = (teamName, managerInfo, engineerInfo, internInfo) => {
  const generateTitle = ` <div class="banner">
    <h1 class="team-title">${teamName}</h1>
  </div>`;

  const generateManagerCard = `<div class="card mt-5 mb-5">
        <h4 class="text-center card-title" id="manager-name">
          <i class="fa-solid fa-user fa-color fa-1x"></i> ${managerInfo.name}
        </h4>
        <div class="card-body">
          <ul class="list-group list-group-flush border">
            <li class="list-group-item fw-bold">
              ID: <span> ${managerInfo.id}</span>
            </li>
            <li class="list-group-item fw-bold">
              Email:
              <span
                ><a href="mailto: ${managerInfo.email}" class="email"
                  >${managerInfo.email}</a
                ></span
              >
            </li>
            <li class="list-group-item fw-bold">
              Office Number:
              <span>${managerInfo.officeNumber}</span>
            </li>
          </ul>
        </div>
      </div>`;

  const generateEngineerCard = (engineer) => {
    return ` <div class="card mt-5 mb-5">
          <h4 class="text-center card-title" id="engineer-name">
            <i class="fa-solid fa-user-gear fa-color fa-1x"></i>${engineer.name}
          </h4>
          <div class="card-body">
            <ul class="list-group list-group-flush border">
              <li class="list-group-item fw-bold">
                ID: <span> ${engineer.id}</span>
              </li>
              <li class="list-group-item fw-bold">
                Email:
                <span
                  ><a href="mailto: ${engineer.email}" class="email"
                    >${engineer.email}</a
                  ></span
                >
              </li>
              <li class="list-group-item fw-bold">
                GitHib:
                <span
                  ><a
                    href="https://github.com/${engineer.github}"
                    class="github"
                    target="_blank"
                    >${engineer.github}</a
                  ></span
                >
              </li>
            </ul>
          </div>
        </div>`;
  };

  const generateInternCard = (intern) => {
    return `<div class="card mt-5 mb-5">
          <h4 class="text-center card-title" id="intern-name">
            <i class="fa-solid fa-user-graduate fa-color fa-1x"></i>${intern.name}
          </h4>
          <div class="card-body">
            <ul class="list-group list-group-flush border">
              <li class="list-group-item fw-bold">
                ID: <span> ${intern.id}</span>
              </li>
              <li class="list-group-item fw-bold">
                Email:
                <span
                  ><a href="mailto: ${intern.email}" class="email"
                    >${intern.email}</a
                  ></span
                >
              </li>
              <li class="list-group-item fw-bold">
                School: <span>${intern.school}</span>
              </li>
            </ul>
          </div>
        </div>`;
  };

  const internCards = internInfo.map(generateInternCard).join("");
  const engineerCards = engineerInfo.map(generateEngineerCard).join("");

  return `<!DOCTYPE html>
      <html lang="en">
        <head>c
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
          <!-- bootstrap css -->
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossorigin="anonymous"
          />
          <!-- google font css -->
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;400;500&family=Bitter:wght@300;400&family=M+PLUS+1p:wght@100;300;400;500&family=Manrope:wght@200;400;600&display=swap"
            rel="stylesheet"
          />
          <!-- font awesome css -->
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
            integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          <!-- authors css -->
          <link rel="stylesheet" href="./assets/css/styles.css" />
          <title>Team Profile Sample</title>
          <link />
          <link />
        </head>
        <body>

        <main>

          <!-- div containing bander -->
          ${generateTitle}
    
          <div class="manager-card-container m-5">
          <div class="manager-card-title"><h3>MANAGER</h3></div>
          <div class="card-flex">

          <!-- manager card container -->
          ${generateManagerCard}

          </div>
          </div>



          <div class="engineer-card-container m-5">
          <div class="engineer-card-title"><h3>ENGINEER</h3></div>
          <div class="card-flex">

          <!-- engineer card container -->
          ${engineerCards}

          </div>
          </div>

           
          <div class="intern-card-container m-5">
          <div class="intern-card-title"><h3>INTERN</h3></div>
          <div class="card-flex">

          <!-- intern card container -->
          ${internCards}

          </div>
          </div>


        </main>
      </body>
    </html>
  `;
};

const init = async () => {
  // declare empty array for engineers
  const engineers = [];
  const interns = [];

  // set the progress of true to loop questions
  let inProgress = true;

  // prompt team name question
  const { teamName } = await inquirer.prompt(teamNameQuestion);

  console.log(teamName);
  // prompt manager questions
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );

  // create new instance of manager using inputs
  const manager = new Manager(name, id, email, officeNumber);

  // start loop using a while loop
  while (inProgress) {
    // ask choice questions
    const { action } = await inquirer.prompt(choiceQuestion);

    if (action === "engineer") {
      // ask engineer questions
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );

      // create engineer instance
      const engineer = new Engineer(name, id, email, github);
      console.log(engineer);

      // push to array
      engineers.push(engineer);
    } else if (action === "intern") {
      // ask intern questions
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );

      // create intern instance
      const intern = new Intern(name, id, email, school);

      // push into array
      interns.push(intern);
    } else {
      inProgress = false;
    }
  }

  console.log(manager.name, manager.id);

  // generate html
  const html = generateHTML(teamName, manager, engineers, interns);

  // write html to file
  fs.writeFileSync(path.join(__dirname, "../dist/index.html"), html);
};

init();
