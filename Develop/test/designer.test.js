const Designer = require("../lib/designer");

describe("Designer Test", () => {
  test("all new Designers have a name, id, email, and portfolio", () => {
    const answers = new Designer("John", 40, "john@gmail.com", "http");
    expect(answers.name).toBeDefined();
    expect(answers.id).toBeGreaterThan(0);
    expect(answers.email).toContain("@");
    expect(answers.portfolio).toContain("http");
  });
  test("getPortfolio returns designer portfolio", () => {
    const answers = new Designer("John", 40, "john@gmail.com", "http");
    expect(answers.getPortfolio()).toContain("http");
  });
  test("getRole returns designer role", () => {
    const answers = new Designer("John", 40, "john@gmail.com", "http");
    expect(answers.getRole()).toBe("designer");
  });
});
