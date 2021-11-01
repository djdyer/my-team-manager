const Engineer = require("../lib/engineer");

describe("Engineer Test", () => {
  test("all new Engineers have a name, id, email, and GitHub", () => {
    const answers = new Engineer("John", 40, "john@gmail.com", "john123");
    expect(answers.name).toBeDefined();
    expect(answers.id).toBeGreaterThan(0);
    expect(answers.email).toContain("@");
    expect(answers.gitHub).toBe("john123");
  });
  test("getGitHub returns engineer GitHub", () => {
    const answers = new Engineer("John", 40, "john@gmail.com", "john123");
    expect(answers.getGitHub()).toBe("john123");
  });
  test("getRole returns engineer role", () => {
    const answers = new Engineer("John", 40, "john@gmail.com", "john123");
    expect(answers.getRole()).toBe("engineer");
  });
});
