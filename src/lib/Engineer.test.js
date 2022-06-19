const Engineer = require("./Engineer");

describe("getFunction", () => {
  // test code for getGithub function

  it("should return github username for new instance", () => {
    const engineer = new Engineer();
    const newEngineerGithub = engineer.getGithub(engineer.github);
    expect(newEngineerGithub).toEqual(engineer.github);
  });

  // test code for getRole function

  it("should return role for a new engineer instance", () => {
    const engineer = new Engineer();
    const newEngineerRole = engineer.getRole(engineer.role);
    expect(newEngineerRole).toEqual(engineer.role);
  });
});
