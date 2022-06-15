// import Employee.js into file
const Employee = require("./Employee");

// engineer class extending from main parent class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  getRole() {
    return this.role;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
