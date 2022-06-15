// import module employee.js into file
const getName = require(`./Employee`);

// testing for getName()

describe("getName", () => {
  // title for the test condition
  it("should return bob when a new employee instance bob is created"),
    () => {
      // expect output from fn
      const expect = "bob";
      // function called with passed in argument value
      const actual = getName("bob");
      // test will check if condition is true
      expect(actual).toEqual(expected);
    };
});

// testing for getId()
// should return id of new employee instance

// testing for getEmail()
// should return email of new employee instance

// testing for getRole()
// should return role of new employee instance
