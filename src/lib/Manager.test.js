const Engineer = require("./Engineer");

describe("getFunction", () => {
  // test code for getOffice Number function
  it("should return github username for new instance", () => {
    const manager = new Manager();
    const newManagerOfficeNum = manager.getOfficeNumber(manager.officeNumber);
    expect(newManagerOfficeNum).toEqual(manager.officeNumber);
  });

  // test code for getRole function

  it("should return role for a new manager instance", () => {
    const manager = new Manager();
    const newManagerRole = intern.getRole(manager.role);
    expect(newManagerRole).toEqual(manager.role);
  });
});
