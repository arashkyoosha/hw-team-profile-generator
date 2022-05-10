const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set github via constrcutor arguments", () => {
            const github = "arashkyoosha";
            const engineer = new Engineer("James", 200, "someone@somewhere.com", github);
            expect(engineer.github).toBe(github);
        });
    });

    describe("Getter methods", () => {
        it("should get github via getGithub()", () => {
            const github = "arashkyoosha";
            const engineer = new Engineer(
                "James", 200, "someone@somewhere.com", github);
            const engineerGithub = engineer.getGithub();
            expect(engineerGithub).toBe(github);
        });

        it("should get role via getRole()", () => {
            const role = "Engineer";
            const engineer = new Engineer(
                "James", 200, "someone@somewhere.com", "arashkyoosha");
            const engineerRole = engineer.getRole();
            expect(engineerRole).toBe(role);
        });
    });
});
