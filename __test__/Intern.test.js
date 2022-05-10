const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should set school via constrcutor arguments", () => {

      const school = "GTech";

      const intern = new Intern("James", 200, "someone@somewhere.com", school);

      expect(intern.school).toBe(school);
    });
  });

  describe("Getter methods", () => {
    it("should get school via getSchool()", () => {

      const school = "GTech";

      const intern = new Intern("James", 200, "someone@somewhere.com", school);
      const internSchool = intern.getSchool();

      expect(internSchool).toBe(school);
    });

    it("should get role via getRole()", () => {

      const role = "Intern";

      const intern = new Intern("James", 200, "someone@somewhere.com", "GTech");
      const internRole = intern.getRole();

      expect(internRole).toBe(role);
    });
  });
});
