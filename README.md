# README-Generator

For this assignment, we were tasked to make a command line application that generates a README file from a user's input. This application is a quick and easy way to create README files which allows a creator to spend more time on the project and less time on the README file.

## Contents 

This application consists of 1 main page, index.js and 2 pages inside the utils folder, generateMarkdown.js and api.js. It also has a package.json for the modules that are used, which are inquirer and axios. 

## User Story 

AS A developer <br>
I WANT a README generator <br>
SO THAT I can quickly create a professional README for a new project 

## Built With 

* VS Code (https://code.visualstudio.com/)
* Terminal 

## Installation 

To generate the README, first run npm install to install the following packages that are dependancies which is stated in the package.json file. 

* inquirer
* axios

The application itself can be invoked with the following command. 

node index.js 

## Screenshots & Video 


## Usage 

When you run node index.js, this appliction uses inquirer to prompt the user in the command line with a series of questions about your application and Github. <br>
The application takes these responses and runs axios to fetch your Github profile from the Github API. After the application has your Github information, it will then generate the markdown file based from the responses the user has given. 
## License


## Author 

Chloe Blackwell<br>
Email: chloeblackwell2@hotmail.com
