const Intern = require("../lib/intern");

describe("Intern Test", () => {
  test("all new Interns have a name, id, email, and school", () => {
    const answers = new Intern("John", 40, "john@gmail.com", "GATech");
    expect(answers.name).toBeDefined();
    expect(answers.id).toBeGreaterThan(0);
    expect(answers.email).toContain("@");
    expect(answers.school).toBeDefined();
  });
  test("getSchool returns intern school", () => {
    const answers = new Intern("John", 40, "john@gmail.com", "GATech");
    expect(answers.getSchool()).toBe("GATech");
  });
  test("getRole returns intern role", () => {
    const answers = new Intern("John", 40, "john@gmail.com", "GATech");
    expect(answers.getRole()).toBeDefined();
  });
});
