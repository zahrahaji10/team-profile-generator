// imports into this applicationz
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const {
  teamNameQuestion,
  choiceQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./utils/questions");
const generateHTML = require("./utils/generate-html");

// fn to prompt/loop questions and stores responses
const init = async () => {
  // declare empty array for engineers
  const engineers = [];
  const interns = [];

  // set the progress of true to loop questions
  let inProgress = true;

  // prompt team name question
  const { teamName } = await inquirer.prompt(teamNameQuestion);

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

  // generate html
  const html = generateHTML(teamName, manager, engineers, interns);

  // write html to file
  fs.writeFileSync(path.join(__dirname, "../dist/index.html"), html);
};

// first fn to be called
init();
