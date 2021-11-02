const Employee = require("../lib/employee");

describe("Employee Test", () => {
  test("all new Employees have a name, id, and email", () => {
    const answers = new Employee("John", 40, "john@gmail.com");
    expect(answers.name).toBeDefined();
    expect(answers.id).toBeGreaterThan(0);
    expect(answers.email).toContain("@");
  });
  test("getName returns employee name", () => {
    const answers = new Employee("John", 40, "john@gmail.com");
    expect(answers.getName()).toBeDefined();
  });
  test("getId returns employee id", () => {
    const answers = new Employee("John", 40, "john@gmail.com");
    expect(answers.getId()).toBeGreaterThan(0);
  });
  test("getEmail returns employee email", () => {
    const answers = new Employee("John", 40, "john@gmail.com");
    expect(answers.getEmail()).toContain("@");
  });
  test("getRole returns employee role", () => {
    const answers = new Employee("John", 40, "john@gmail.com");
    expect(answers.getRole()).toBe("employee");
  });
});
