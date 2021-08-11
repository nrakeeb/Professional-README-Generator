// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![license](https://img.shields.io/badge/license-${data.license}-green)](https://shields.io)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)

 
  ## 🔍 Description:
  ${data.description}

 
  ## 💾 Installation:
  ${data.installation}

  
  ## 💻 Usage:
  ${data.usage}


  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-green)](https://shields.io)
  <br/>
  This application is covered by the ${data.license} license.


  ## 👪 Contribution:
  ${data.contribution}


  ## ✏️ Testing:
  ${data.testing}


  ## Questions:

  - Github: 
  Find me on GitHub:[${data.username}] (https://github.com/${data.username})
  <br>
  - Email: 
  Email me on: ${data.email} 
  
`;
}

module.exports = generateMarkdown;
