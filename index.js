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

//Production Modules-------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');
const htmlGenerator = require('./util/generateHtml')

//Constructor Modules------------------------------------------
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


//Global Variables---------------------------------------------


//Functions----------------------------------------------------

