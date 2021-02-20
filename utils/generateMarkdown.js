// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    switch (license) {
      case "MIT":
        return `![alt for img](https://img.shields.io/badge/license-MIT-green)`;
      case "Mozilla":
        return `![alt for img](https://img.shields.io/badge/license-MIT-green)`;
      case "Apache":
        return `![alt for img](https://img.shields.io/badge/license-MIT-green)`;
      default:
        return ``;
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[MIT](https://choosealicense.com/licenses/MIT)`;
    case "Mozilla":
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    case "Apache":
      return `https://choosealicense.com/licenses/apache-2.0/`;
    default:
      return ``;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none'){
    return "";
  }
  else {
    return `## License 
  ${renderLicenseBadge(license)}
    
  This project is licensed by ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description 
  ${data.description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#contributing)
  * [Test](#test)
  * [License](#license)
  * [Author](#username)
  * [Email](#email)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Credits
  ${data.contributing}

  ## Test
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Author
  [${data.username}](https://github.com/${data.username})

  ${data.email}
`;
}

module.exports = generateMarkdown;
