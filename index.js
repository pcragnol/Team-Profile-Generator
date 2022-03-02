const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the team manager\'s name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          return 'Please enter the team manager\'s name.';
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team manager\'s id?',
      // validate: idInput => {
      //   if (typeof idInput === 'number' && idInput > 0) {
      //     return true;
      //   } else {
      //     return 'Please enter a number greater than 0.';
      //   }
      // }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team manager\'s email?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          return 'Please enter the team manager\'s email.';
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team manager\'s office number?',
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          return 'Please enter the team manager\'s office number.';
        }
      }
    }
  ])
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    addTeamMember();
  });
};

const addTeamMember = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'teamMember',
      message: 'Which type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'No more team members to add']
    }
  ])
  .then((answer) => {
    switch (answer.teamMember) {
      case 'Engineer':
        addEngineer();
        break;
      case 'Intern':
        addIntern();
        break;
      case 'No more team members to add':
        assembleTeam();
        break;
    }
  });
};

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineer\'s name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          return 'Please enter the engineer\'s name.';
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineer\'s id?',
      // validate: idInput => {
      //   if (typeof idInput === 'number' && idInput > 0) {
      //     return true;
      //   } else {
      //     return 'Please enter a number greater than 0.';
      //   }
      // }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineer\'s email?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          return 'Please enter the engineer\'s email.';
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s github username?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          return 'Please enter the engineer\'s github username.';
        }
      }
    }
  ])
  .then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    addTeamMember();
  });
};

const addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the intern\'s name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          return 'Please enter the intern\'s name.';
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the intern\'s id?',
      // validate: idInput => {
      //   if (typeof idInput === 'number' && idInput > 0) {
      //     return true;
      //   } else {
      //     return 'Please enter a number greater than 0.';
      //   }
      // }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the intern\'s email?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          return 'Please enter the intern\'s email.';
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is the intern\'s school?',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          return 'Please enter the intern\'s school.';
        }
      }
    }
  ])
  .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
    addTeamMember();
  });
};

const assembleTeam = () => {

};

promptUser();
