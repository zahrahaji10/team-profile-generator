const Intern = require("./Intern");

describe("getFunction", () => {
  // test code for getGithub function

  it("should return github username for new instance", () => {
    const intern = new Intern();
    const newInternSchool = intern.getSchool(intern.school);
    expect(newInternSchool).toEqual(intern.school);
  });

  //   test code for getRole function

  it("should return role for a new intern instance", () => {
    const intern = new Intern();
    const newInternRole = intern.getRole(intern.role);
    expect(newInternRole).toEqual(intern.role);
  });
});
