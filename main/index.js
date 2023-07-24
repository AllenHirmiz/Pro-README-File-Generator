const inquirer = require('inquirer');
const fs = require('fs');


  const generateHTML = ({ description, install, use, contributions,test,license,email,github }) =>
  `#### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Code of Conduct](#code-of-conduct)
  6. [Test Instructions](#test-instructions)
  7. [License](#license)
  8. [Questions](#questions)
  
  
  ## Project Description
  * ${description}
  
  ## Installation Instructions
  * ${install}
  
  ## Usage Information
  * ${use}
  
  ## Contributor Guidelines
  * ${contributions}
  
  ## Test Instructions
  * ${test}
  
  ## License
  * licensed under the ${license}
  
  ## Questions
  * For additional help or questions about collaboration, please reach out to ${email}
  
  * Follow me on Github at [${github}](http://github.com/${github})`;

  inquirer
  .prompt([
    {
        type: "input",
        name: "project_title",
        message: "What is your project tittled?"
      },
      {
        type: "input",
        name: "description",
        message: "Briefly describe your project"
      },
      {
        type: "input",
        name: "install",
        message: "Are there any installations required?"
      },
      {
        type: "input",
        name: "use",
        message: "What is the use of the application"
      },
      {
        type: "input",
        name: "contributions",
        message: "Are there any contribution rules?"
      },
      {
        type: "input",
        name: "test",
        message: "Please provide test instructions if applicable"
      },
      {
        type: "checkbox",
        message: "License?",
        name: "license",
        choices: [
          "[MIT License](LICENSE.txt)", 
          "[GNU GPLv3 License](COPYING.txt)", 
        ]
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email account"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github username"
      }
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile(`./README-Files/${answers.project_title}-README.md`, htmlPageContent, (err) =>
      err ? console.log(err) : console.log(`Successfully created ${answers.project_title}-README.md!`)
    );
  });