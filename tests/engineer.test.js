const Engineer = require('../lib/Engineer');

// test case to return the github user name of engineer
describe('Engineer', () => {

    it(`should return the github of the engineer`, () => {
        const githubName = "Lea131";
        const githubUser = new Engineer("Lea", 123456, "lea@email.com", githubName);
        expect(githubUser.getGithub()).toBe(githubName);
    });
});

// test case to return the role function
describe('Engineer', () => {

    it(`should return the role of the engineer by calling the getRole function`, () => {
        const role = "Engineer";
        const userRole = new Engineer("Lea", 123456, "lea@email.com", "Lea131", role);
        expect(userRole.getRole()).toBe(role);
    });
});