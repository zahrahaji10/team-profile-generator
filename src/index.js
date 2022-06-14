// import inquirer into this application
const inquirer = require("inquirer");

// declare questions objects array using inquirer

// first question user will be asked
const startQuestions = [
  {
    message: "Please enter team name",
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
  },
  {
    message: "Select the type of employee to add to the team",
    type: "list",
    name: "typeOfEmployee",
    choice: ["Manager", "Engineer", "Intern"],
  },
];
