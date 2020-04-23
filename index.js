
const inquirer = require("inquirer");
const getUser = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
{
    type: "input",
    name: "title",
    message: "What Is Your Project Title?"
},
{
    type: "input",
    name: "desc",
    message: "Please Provide A Short Description" 

},
{
    type: "input",
    name: "install",
    message: "Please Confirm If Any Installations Are Required"
},
{
    type: "input",
    name: "usage",
    message: "Please Share Any Usage Requirements or Enter NA"
},
{
    type: "input",
    name: "license",
    message:"Please Share Any Licenses or Enter NA"
},
{
    type: "input",
    name: "contributors",
    message:"Please Share Any Project Contributions or Enter NA"
},
{
    type: "input",
    name: "tests",
    message: "Are There Any Associated Tests? If Not, Enter NA"
}, 
{
    type: "input",
    name: "userName",
    message: "Please Enter Your GitHub Username"
}
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
          }        
        console.log("Success!");
    });
};

function init() {

inquirer
  .prompt(questions)
  .then(function(response) {
      getUser(response.userName).then(data => 
        {console.log(data)
        
            //first data is paramater from line 56, second data is git hub specific key
        response.picture = data.data.avatar_url;
        response.email = data.email;

        var projectMarkdown = generateMarkdown(response);
        writeToFile("README.md", projectMarkdown);
        }
        
        );
    
  });

}

init();

// use AXIOS to pull username from GitHub to use for Read (use headers to change to application/json; index.js to username is the person - inside of inquirer)
// review how to make an axios call in classwork
// link to github API
// index.js to use inquirer (to prompt the user with questions)
// use writeFile function to create the Read Me



