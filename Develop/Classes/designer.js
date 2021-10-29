const Employee = require("./employee");

class Designer extends Employee {
  constructor(name, id, email, portfolio) {
    super(name, id, email);
    this.portfolio = portfolio;
  }
  getPortfolio() {
    return this.portfolio;
  }
  getRole() {
    return "designer";
  }
}

module.exports = Designer;
