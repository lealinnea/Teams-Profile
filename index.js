const inquirer = require("inquirer");
const fs = require("fs");
const express = require("express");
const Engineer = require('./lib/engineerClass')
const Intern = require('./lib/internClass')
const Manager = require('./lib/managerClass')
let newEmployee = [];
let engineers = [];
let interns = [];

const QuestForMan = [
    {
        type: "input",
        name: "Name",
        message: "Manager Name"
    },


    {
        type: "input",
        name: "ID",
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
        name: "Add Manager",
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
        name: "phoneNumber",
        message: "Manager Phone Number"
    },

    {
        type:"list",
        name: "Add Engineer",
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
        name: "School",
        message: "Enter Interns School?"
    },

    {
        type:"list",
        name: "Add Intern",
        message: "Would you like to add Intern?",
        choices: ['yes', 'no']
    },

];

