const Employee = require("../lib/employee");

describe("Employee Test", () => {
  test("all new Employees have a name, id, and email", () => {
    const answers = new Employee("Guy", 52, "guy@gmail.com");
    expect(answers).toHaveProperty("name");
    expect(answers.name).toBe("Guy");
    expect(answers).toHaveProperty("id");
    expect(answers.id).toBe(52);
    expect(answers).toHaveProperty("email");
    expect(answers.email).toBe("guy@gmail.com");
  });
  test("Expect getName to return the employee name", () => {
    const answers = new Employee("Guy", 52, "guy@gmail.com");
    expect(answers.getName()).toBe("Guy");
  });
  test("Expect getId to return the employee id", () => {
    const answers = new Employee("Guy", 52, "guy@gmail.com");
    expect(answers.getId()).toBe(52);
  });
  test("Expect getEmail to return the employee email", () => {
    const answers = new Employee("Guy", 52, "guy@gmail.com");
    expect(answers.getEmail()).toBe("email@email.com");
  });
  test("Expect getRole to return the employee role", () => {
    const answers = new Employee("Guy", 52, "guy@gmail.com");
    expect(answers.getRole()).toBe("employee");
  });
});
