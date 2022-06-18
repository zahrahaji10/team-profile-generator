const inquirer = require("inquirer");

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

module.exports = {
  teamNameQuestion,
  choiceQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
