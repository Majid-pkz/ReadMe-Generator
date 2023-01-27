// packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');

// an array of questions for user input
const questions = [
    { 
        type:'input',         
        message: 'What is Your-Project-Title?',
        name:'title',
    },
    { 
        type:'input',         
        message: 'Provide a short description explaining the what, why, and how of your project',
        name:'description',
    },
    { 
        type:'input',         
        message: 'What was your motivation?',
        name:'motivation',
    },
    {
    type: "list",
    message: "choose a license",
    name: "license",
    choices: [ 
        'Apache License 2.0',
        'GNU General Public License v3.0',
       ' MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense'    ],
    },
    { 
        type:'input',         
        message: 'Name of contributors?',
        name:'contribute',
    },
    
    {        
        type:'input',
        message: 'type in your GitHub Repository URL',
        name:'github',
    }];

    const generateMdContent=   ({ title, description, motivation,license,contribute,github})=>

    `# ${title} \n 
    \n---\n
    \n## Description\n    
    \n ${description}\n  
    \n---\n  
    \n### Usage\n
    \n${motivation}\n
    \n---\n
    \n### License\n
    \n${license}\n
    \n---\n
    \n### Contributors\n
    \n${contribute}\n  
    \n---\n  
    \n### where to find it \n
    \n ${github}     
    `;

    inquirer.prompt(questions).then ((answers) =>{

         const mdContent=generateMdContent(answers);
        fs.writeFile(`README.md`, mdContent, (err) => 
        err ? console.log(err) : console.log('Successfully createdReadme File!')
          );
       

    })













    

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
