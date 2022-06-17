// import module employee.js into file
const Employee = require("../../src/lib/Employee");

describe("getFunctions", () => {
  // test condition for getName function

  it("should return name of each new employee instance", () => {
    const employee = new Employee();
    const newEmployeeName = employee.getName(employee.name);
    expect(newEmployeeName).toEqual(employee.name);
  });

  // testing for getId function

  it("should return id of each new employee instance", () => {
    const employee = new Employee();
    const newEmployeeId = employee.getId(employee.id);
    expect(newEmployeeId).toEqual(employee.id);
  });

  // testing for getEmail function

  it("should return email of each new employee instance", () => {
    const employee = new Employee();
    const newEmployeeEmail = employee.getEmail(employee.email);
    expect(newEmployeeEmail).toEqual(employee.email);
  });

  // testing for getRole function

  it("should return role of new employee instance", () => {
    const employee = new Employee();
    const newEmployeeRole = employee.getRole(employee.role);
    expect(newEmployeeRole).toEqual(employee.role);
  });
});
