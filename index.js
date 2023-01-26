//TODO: Initialize index by adding required modules
//1. require fs
//2. require local modles
//3. require inquirer
//TODO: Create inquirer promts for dream-team mebers
//1. include questions for team manager’s name, employee ID, email address, and office number
//2. include questions for team engineer’s name, ID, email, and GitHub username
//3. include questions for team intern’s name, ID, email, and school
//TODO: Create main menue and separate menus for each prompt section
//1. create function that returns user to main menu
//2. create various prompt menues to add different dream-team members
//TODO: Have dream-team details appear in html file
//1. generate html file using data provided by the user
//2. have htrml generate upon exiting the application
//TODO: Link html emails to users default email app
//TODO: Link github usernames to github accounts in new tab


//initializers=================================================
//Production Modules-------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const htmlGenerator = require('./util/generateHtml.js')

//Constructor Modules------------------------------------------
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


//Global Variables---------------------------------------------
const team = [];


//Functions====================================================
//Function that starts Dream-team application
const init = async () => {
    try {
        //Initialize Dream-team generater with prompt
        const main = await inquirer.prompt([
            {
                type: 'list',
                message: 'Welcome to the Dream-team',
                choices: ['Start', 'Quit'],
                name: 'start',
            },
        ]);
        //Call f() in sequence to generate the Dream-team----------
        if (main.start === 'Start') {
            await addManager();
            await addMembers();
        } else if (main.start === 'Quit') {
            process.exit(0);
        }

    } catch (error) {
        console.log(error);
    }

}
//Functions to add members to the Dream-team---------------
const addManager = async () => {
    try {
        const manager = await inquirer.prompt([
            {
                type: 'input',
                message: 'Who manages your Dream-team?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is their employee ID?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is their office number?',
                name: 'office',
            },
        ]);

        let { name, id, email, office } = manager;
        team.push(new Manager(name, id, email, office));
    } catch (error) {
        console.log(error);
    }
}

const addMembers = async () => {
    try {
        const member = await inquirer.prompt([
            {
                type: 'list',
                message: 'Would you like to add an Engineer or Intern to your Dream-team?',
                choices: ['Engineer', 'Intern', "I'm done"],
                name: 'recurrent',
            },
        ]);
        if (member.recurrent === "I'm done") {
            fs.writeFile('index.htlm', htmlGenerator(team), (err) => err ? console.log(err) : console.log('You successfully created your Dream-team.'));
            return;
        } else if (member.recurrent === 'Engineer') {
            const engineer = await inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is their name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is their employee ID?',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is their email?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is their Github username?',
                    name: 'github',
                },
            ]);

            let { name, id, email, github } = engineer;
            team.push(new Engineer(name, id, email, github));

            await addMembers();

        } else if (member.recurrent === 'Intern') {
            const intern = await inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is their name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is their employee ID?',
                    name: 'id',
                },
                {
                    type: 'input',
                    message: 'What is their email?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'Where did they receive their education?',
                    name: 'school',
                },
            ]);

            let { name, id, email, school } = intern;
            team.push(new Intern(name, id, email, school));

            await addMembers();
        }
    } catch (error) {
        console.log(error);
    }
}

init();