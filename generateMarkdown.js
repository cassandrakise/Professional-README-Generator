
function renderLicenseBadge(license) {
  return`https://img.shields.io/badge/License-${license}-blue`
}

function renderLicenseLink(license) {
  return`https://choosealicense.com/licenses/${license}/`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License:](${renderLicenseBadge(data.license)})
## Description: 
  * ${data.description}

## Table of Contents:
  * ${data.tableOfContents}

### Installation:
  * ${data.installation}

### Usage:
  * ${data.usage}

### Contributors:
  * ${data.contributors}

### Tests Used:
  * ${data.tests}

#### If you have questions please contact the following:
  * ${data.name} at ${data.email}. 
  * You may also copy this repo on their GitHub at: ${data.GitHub}

  `;

}

module.exports = generateMarkdown;
