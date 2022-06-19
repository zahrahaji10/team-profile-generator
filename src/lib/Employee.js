// declared the employee class as an object
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  //fn to get the name for each instancies
  getName() {
    return this.name;
  }

  //fn to get the id for each instancies
  getId() {
    return this.id;
  }

  //fn to get the email for each instancies
  getEmail() {
    return this.email;
  }

  //fn to get the role for each instancies
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
