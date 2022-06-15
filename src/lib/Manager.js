const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  //   fn to get office number
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
