// import Employee.js into file
const Employee = require("./Employee");

// intern class extending from main parent class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
