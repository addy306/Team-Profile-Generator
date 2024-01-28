const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let team = []


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Function for team manager prompt
function startApp() {
    inquirer.prompt([
        {
            type:"input",
            name:"managerName",
            message:"Enter the Manager Name",
        },
        {
            type:"input",
            name:"employeeId",
            message:"Enter the Employee ID",
        },
        {
            type:"input",
            name:"emailAddress",
            message:"Enter the Email Address",
        },
        {
            type:"input",
            name:"officeNumber",
            message:"Enter the Office Number",
        },
    ])
}

// Add Engineer Function
function addEngineer() {
    inquirer.prompt([
        {
            type:"input",
            name:"engineerName",
            message:"Enter the Engineer's Name",
        },
        {
            type:"input",
            name:"engineerId",
            message:"Enter the Engineer's ID",
        },
        {
            type:"input",
            name:"engiEmailAddress",
            message:"Enter the Engineer's Email Address",
        },
        {
            type:"input",
            name:"gitHubUsername",
            message:"Enter the GitHub username",
        },
    ])
}