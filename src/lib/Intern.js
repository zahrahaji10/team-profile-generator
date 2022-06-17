// import Employee.js into file
const Employee = require("./Employee");

// intern class extending from main parent class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "intern";
  }

  //fn to get the role for each intern instancies

  getRole() {
    return this.role;
  }

  //fn to get the school for each intern instancies

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
