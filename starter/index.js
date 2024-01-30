const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { error } = require("console");

let team = []

// Function for team manager prompt
function startApp() {
    inquirer.prompt([
        {
            type:"input",
            name:"managerName",
            message:"Enter the Manager Name",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"employeeId",
            message:"Enter the Employee ID",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"emailAddress",
            message:"Enter the Email Address",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"officeNumber",
            message:"Enter the Office Number",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
    ])
    .then ((answers)=> {
        const manager = new Manager(answers.managerName,answers.employeeId,answers.emailAddress,answers.officeNumber);
        //push manager details into team array
        team.push(manager);
        mainMenu()
    }
    )
}
startApp()


//Main menu function
function mainMenu() {
    inquirer.prompt([
        {
            type:"list",
            name:"mainmenu",
            message:"What would you like to do?",
            choices:["Add an engineer","Add an intern","Finish building the team"]
        },
    ])
.then((answers) =>{
    //Check for user choice and run function accordingly
    if (answers.mainmenu === "Add an engineer") {
        addEngineer()
    } else if (answers.mainmenu === "Add an intern"){
        addIntern()
    }
    else{
        finishTeam()
    }
})
}





// Add Engineer Function
function addEngineer() {
    inquirer.prompt([
        {
            type:"input",
            name:"engineerName",
            message:"Enter the Engineer's Name",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"engineerId",
            message:"Enter the Engineer's ID",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"engiEmailAddress",
            message:"Enter the Engineer's Email Address",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"gitHubUsername",
            message:"Enter the GitHub username",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
    ])
    .then ((answers)=> {
        const engineer = new Engineer(answers.engineerName,answers.engineerId,answers.engiEmailAddress,answers.gitHubUsername);
        //push engineer details into team array
        team.push(engineer);
        mainMenu()
    }
    )
}

// Add Intern Function
function addIntern() {
    inquirer.prompt([
        {
            type:"input",
            name:"internName",
            message:"Enter the Intern’s Name",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"internId",
            message:"Enter the Intern’s ID",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"internEmail",
            message:"Enter the Intern’s Email Address",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
        {
            type:"input",
            name:"internSchool",
            message:"Enter the Intern’s School ",
             // Validate user entry to make sure user types an input
        validate: (value)=> {if(value){return true} else {return "Please type some text to continue"}},
        },
    ])
    .then ((answers)=> {
        const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool);
        //push intern details into team array
        team.push(intern);
        mainMenu()
    }
    )
}

// When a user decides to finish building their team 
//then they exit the application, and the HTML is generated.
function finishTeam() {
    //adding html to fs
    //Write it to a file named team.html in the output folder.
fs.writeFile(outputPath,render(team),error =>{
    if (error){
    console.log(error);
    }
})
}








