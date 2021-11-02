const Manager = require("../lib/manager");

describe("Manager Test", () => {
  test("all new Managers have a name, id, email, and officeNumber", () => {
    const answers = new Manager("John", 40, "john@gmail.com", "555");
    expect(answers.name).toBeDefined();
    expect(answers.id).toBeGreaterThan(0);
    expect(answers.email).toContain("@");
    expect(answers.officeNumber).toBe("555");
  });
  test("getOfficeNum returns manager officeNumber", () => {
    const answers = new Manager("John", 40, "john@gmail.com", "555");
    expect(answers.getOfficeNum()).toBe("555");
  });
  test("getRole returns manager role", () => {
    const answers = new Manager("John", 40, "john@gmail.com", "555");
    expect(answers.getRole()).toBe("manager");
  });
});
