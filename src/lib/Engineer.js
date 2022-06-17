// import Employee.js into file
const Employee = require("./Employee");

// engineer class extending from main parent class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  //fn to get the role for each engineer instancies

  getRole() {
    return this.role;
  }

  //fn to get the github username for engineer instancies

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
