// const inquirer = require("inquirer");
// const fs = require("fs");
// const express = require("express");
// const Engineer = require('./lib/engineerClass')
// const Intern = require('./lib/internClass')
// const Manager = require('./lib/managerClass')
// let newEmployee = [];
// let engineers = [];
// let interns = [];
// const teamArry = [];

// const QuestForMan = [
//     {
//         type: "input",
//         name: "managerName",
//         message: "Manager Name"
//     },


//     {
//         type: "input",
//         name: "managerID",
//         message: "Manager ID"
//     },


//     {
//         type: "input",
//         name: "email",
//         message: "Manager Email"
//     },

//     {
//         type: "input",
//         name: "phoneNumber",
//         message: "Manager Phone Number"
//     },

//     {
//         type: "list",
//         name: "addManager",
//         message: "Would you like to add Manager?",
//         choices: ['yes', 'no'],
//     },

// ];

// const QuestForEG = [
//     {
//         type:"input",
//         name: "engineerName",
//         message: "Engineer Name"
//     },

//     {
//         type:"input",
//         name: "engineerID",
//         message: "Engineer ID"
//     },


//     {
//         type:"input",
//         name: "email",
//         message: "Engineer Email"
//     },

//     {
//         type:"input",
//         name: "github",
//         message: "Engineer's Github Name?"
//     },

//     {
//         type:"input",
//         name: "officeNumber",
//         message: "Manager Phone Number"
//     },

//     {
//         type:"list",
//         name: "addEngineer",
//         message: "Would you like to add Engineer?",
//         choices: ['yes', 'no']
//     },

// ];

// const QuestForIntern = [
//     {
//         type:"input",
//         name: "internName",
//         message: "Intern Name"
//     },

//     {
//         type:"input",
//         name: "internID",
//         message: "InternID"
//     },


//     {
//         type:"input",
//         name: "email",
//         message: "Intern Email"
//     },

//     {
//         type:"input",
//         name: "school",
//         message: "Enter Interns School?"
//     },

//     {
//         type:"list",
//         name: "addIntern",
//         message: "Would you like to add Intern?",
//         choices: ['yes', 'no']
//     },

// ];

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");
const template = require("./src/template");

// empty array to hold team answers
const teamAnswers = [];


function employeeQuestions() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeePosition",
                choices: ["Manager", "Intern", "Engineer"]
            },
            {
                type: "input",
                name: "employeeName",
                message: "Please enter the name of the employee"
            },
            {
                type: "input",
                name: "employeeID",
                message: "Please enter the ID number of the employee"
            },
            {
                type: "input",
                name: "employeeEmail",
                message: "Please enter the email address for the employee"
            },
            // these are special questions that will only get asked when (clause) a critia is met. ie if an intern, will ask what school
            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the github username for the engineer",
                when: (response) => response.employeePosition === "Engineer",
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "Please enter the office number for the manager",
                when: (response) => response.employeePosition === "Manager",
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the school for the intern",
                when: (response) => response.employeePosition === "Intern",
            },
        ])
        // once the questions are answered then create a new Manager, Intern, or Engineer obj using the responses
        .then((response) => {
            if (response.employeePosition === "Manager") {
                const manager = new Manager(
                    response.employeeName,
                    response.employeeID,
                    response.employeeEmail,
                    response.managerOfficeNum
                )
                teamAnswers.push(manager)
            } else if (response.employeePosition === "Intern") {
                const intern = new Intern(
                    response.employeeName,
                    response.employeeID,
                    response.employeeEmail,
                    response.internSchool
                )
                teamAnswers.push(intern)
            } else if (response.employeePosition === "Engineer") {
                const engineer = new Engineer(
                    response.employeeName,
                    response.employeeID,
                    response.employeeEmail,
                    response.engineerGithub
                )
                teamAnswers.push(engineer)
            }
            // ask would you like to add more employees
            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "additionalEmployee",
                        message: "Do you want to add additional employees to your team?",
                        choices: ["Yes", "No"]
                    }
                ])
                // if yes then call question function again, if no then generate html
                .then((addEmployeeAnswer) => {
                    if (addEmployeeAnswer.additionalEmployee === "Yes") {
                        console.log(response)
                        employeeQuestions();
                    } else {
                        console.log(response)
                        fs.writeFileSync(outputPath, template(teamAnswers), "UTF-8"), (err) => {
                            if (err) {
                                console.log('ERR ON WRITE FILE' + err)
                            } else {
                                console.log('SUCCESS!')
                            }
                        }
                    }
                })
        })
}
// call questions so when we run file it will begin asking the questions in the terminal
employeeQuestions();