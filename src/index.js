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

// manager questions array
const managerQuestions = [
  {
    message: "Please enter manager name",
    type: "input",
    name: "name",
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return "Please enter manager name to continue";
      }
    },
  },
  {
    message: "Please enter manager ID",
    type: "input",
    name: "id",
    validate: (enteredId) => {
      if (enteredId) {
        return true;
      } else {
        return "Please enter manager name to continue";
      }
    },
  },
  {
    message: "Please enter manager email address ",
    type: "input",
    name: "email",
    validate: (enteredEmail) => {
      if (enteredEmail) {
        return true;
      } else {
        return "Please enter manager email address to continue";
      }
    },
  },
  {
    message: "Please enter manager office number",
    type: "input",
    name: "officeNumber",
    validate: (enteredOfficeNumber) => {
      if (enteredOfficeNumber) {
        return true;
      } else {
        return "Please enter manager office number to continue";
      }
    },
  },
];

// manager questions array

// manager questions array
const engineerQuestions = [
  {
    message: "Please enter engineer name",
    type: "input",
    name: "name",
    validate: (enteredName) => {
      if (enteredName) {
        return true;
      } else {
        return "Please enter name to continue";
      }
    },
  },
  {
    message: "Please enter ID number",
    type: "input",
    name: "id",
    validate: (enteredId) => {
      if (enteredId) {
        return true;
      } else {
        return "Please enter ID number to continue";
      }
    },
  },
  {
    message: "Please enter email address ",
    type: "input",
    name: "email",
    validate: (enteredEmail) => {
      if (enteredEmail) {
        return true;
      } else {
        return "Please enter email address to continue";
      }
    },
  },
  {
    message: "Please enter github username",
    type: "input",
    name: "github",
    validate: (enteredGithub) => {
      if (enteredGithub) {
        return true;
      } else {
        return "Please enter github username to continue";
      }
    },
  },
];
