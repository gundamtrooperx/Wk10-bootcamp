const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let managerArray = [];
let engineerArray = [];
let internArray = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
company()
function company() {
    inquirer.prompt(
        [
            {
                type: "list",
                choices: ["Manager", "Engineer", "Intern", "Exit application"],
                name: "userchoice",
                message: "select option",

            }
        ]
    ).then(function (response) {
        switch (response.userchoice) {
            case "Manager":
                addempmana()
                break;
            case "Engineer":
                addempeng()
                break;
            case "Intern":
                addempint()
                break;
            default:
                generatehtmlfile()
        }
    })
}
function addempmana() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Manager name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Manager id",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Manager email",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Manager officeNumber",
            name: "officeNumber"
        },

    ])
        .then(function (response) {
            const userManager = new Manager(response.name, response.id, response.email, response.officeNumber)
            managerArray.push(userManager)
            console.log(managerArray)
            company()

        })
}
function addempeng() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineer name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Engineer id",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Engineer email",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Engineer Github",
            name: "github"
        },

    ])
        .then(function (response) {
            const userEngineer = new Engineer(response.name, response.id, response.email, response.github)
            engineerArray.push(userEngineer)
            console.log(engineerArray)
            company()

        })
}
function addempint() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter Intern id",
            name: "id"
        },
        {
            type: "input",
            message: "Enter Intern email",
            name: "email"
        },
        {
            type: "input",
            message: "Enter Intern School",
            name: "School"
        },

    ])
        .then(function (response) {
            const userIntern = new Intern(response.name, response.id, response.email, response.School)
            internArray.push(userIntern)
            console.log(internArray)
            company()

        })
}
function generatehtmlfile() {
    var openhtml = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">`
    var closinghtml = `
    </div>
</div>
</div>
</body>

</html>`
var managerhtml =""
for (let i = 0; i < managerArray.length; i++ ){
    managerhtml += `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${managerArray[i].name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${managerArray[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerArray[i].email}">${managerArray[i].email}</a></li>
            <li class="list-group-item">Office number:${managerArray[i].officeNumber}</li>
        </ul>
    </div>
</div>
`
}
var internhtml =""
for (let i = 0; i < internArray.length; i++ ){
    internhtml += `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${internArray[i].name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${internArray[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${internArray[i].email}">${internArray[i].email}</a></li>
            <li class="list-group-item">School:${internArray[i].school}</li>
        </ul>
    </div>
</div>
`
}
var engineerhtml =""
for (let i = 0; i < engineerArray.length; i++ ){
    engineerhtml += `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineerArray[i].name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineerArray[i].id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineerArray[i].email}">${engineerArray[i].email}</a></li>
            <li class="list-group-item">Github:${engineerArray[i].github}</li>
        </ul>
    </div>
</div>
`
}
console.log(managerArray,engineerArray,internArray)
console.log(managerhtml,engineerhtml,internhtml)
    var htmlcontent = openhtml + managerhtml + engineerhtml + internhtml + closinghtml
    console.log(htmlcontent)
    fs.writeFileSync("./output/index.html", htmlcontent, function () {
        console.log("file generator")
        process.exit(0)
    }
    )
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
