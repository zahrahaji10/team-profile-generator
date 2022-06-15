// import module employee.js into file
const Employee = require("../../src/lib/Employee");
const getName = require("../../src/lib/Employee");

describe("getFunctions", () => {
  // test condition for getName function
  it("should return name of each new employee instance", () => {
    // expect output from fn
    const employee = new Employee();
    // function called with passed in argument value
    const newEmployeeName = employee.getName(employee.name);
    // test will check if condition is true
    expect(newEmployeeName).toEqual(employee.name);
  });

  // test condition for getName function
  it("should return id of each new employee instance", () => {
    // expect output from fn
    const employee = new Employee();
    // function called with passed in argument value
    const newEmployeeId = employee.getId(employee.id);
    // test will check if condition is true
    expect(newEmployeeId).toEqual(employee.id);
  });

  // testing for getEmail function

  it("should return email of each new employee instance", () => {
    // expect output from fn
    const employee = new Employee();
    // function called with passed in argument value
    const newEmployeeEmail = employee.getEmail(employee.email);
    // test will check if condition is true
    expect(newEmployeeEmail).toEqual(employee.email);
  });

  // testing for getRole function

  it("should return role of new employee instance", () => {
    // expect output from fn
    const employee = new Employee();
    // function called with passed in argument value
    const newEmployeeRole = employee.getRole(employee.role);
    // test will check if condition is true
    expect(newEmployeeRole).toEqual(employee.role);
  });
});
