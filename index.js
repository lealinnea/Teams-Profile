const inquirer = require("inquirer");
const fs = require("fs");
const express = require("express");
const Engineer = require('./lib/engineerClass')
const Intern = require('./lib/internClass')
const Manager = require('./lib/managerClass')
let newEmployee = [];
let engineers = [];
let interns = [];
const teamArry = [];

const QuestForMan = [
    {
        type: "input",
        name: "managerName",
        message: "Manager Name"
    },


    {
        type: "input",
        name: "managerID",
        message: "Manager ID"
    },


    {
        type: "input",
        name: "email",
        message: "Manager Email"
    },

    {
        type: "input",
        name: "phoneNumber",
        message: "Manager Phone Number"
    },

    {
        type: "list",
        name: "addManager",
        message: "Would you like to add Manager?",
        choices: ['yes', 'no'],
    },

];

const QuestForEG = [
    {
        type:"input",
        name: "engineerName",
        message: "Engineer Name"
    },

    {
        type:"input",
        name: "engineerID",
        message: "Engineer ID"
    },


    {
        type:"input",
        name: "email",
        message: "Engineer Email"
    },

    {
        type:"input",
        name: "github",
        message: "Engineer's Github Name?"
    },

    {
        type:"input",
        name: "officeNumber",
        message: "Manager Phone Number"
    },

    {
        type:"list",
        name: "addEngineer",
        message: "Would you like to add Engineer?",
        choices: ['yes', 'no']
    },

];

const QuestForIntern = [
    {
        type:"input",
        name: "internName",
        message: "Intern Name"
    },

    {
        type:"input",
        name: "internID",
        message: "InternID"
    },


    {
        type:"input",
        name: "email",
        message: "Intern Email"
    },

    {
        type:"input",
        name: "school",
        message: "Enter Interns School?"
    },

    {
        type:"list",
        name: "addIntern",
        message: "Would you like to add Intern?",
        choices: ['yes', 'no']
    },

];

