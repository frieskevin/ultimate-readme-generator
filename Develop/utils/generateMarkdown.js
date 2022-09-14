
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge
  switch (license) {
    case 'GNU AGPLv3':
      badge = `![](https://img.shields.io/badge/license-GNU%20AGPLv3-green)`
      break;
    case 'GNU GPLv3':
      badge = `![](https://img.shields.io/badge/license-GNU%20GPLv3-green)`
      break;
    case 'GNU LGPLv3':
      badge = `![](https://img.shields.io/badge/license-GNU%20LGPLv3-green)`
      break;
    case 'Mozilla Public License 2.0':
      badge = `![](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-green)`
      break;
    case 'Apache License 2.0':
      badge = `![]https://img.shields.io/badge/license-Apache%20License%202.0-green)`
      break;
    case 'MIT License':
      badge = `![](https://img.shields.io/badge/license-MIT%20License-green)`
      break;
    case 'Boost Software License 1.0':
      badge = `![](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-green)`
      break;
    case 'The Unlicense':
      badge = `![](https://img.shields.io/badge/license-The%20Unlicense-green)`
      break;
    case 'None':
      badge = ``
      break;
  };
  badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link
  switch (license) {
    case 'GNU AGPLv3':
      link = `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`
      break;
    case 'GNU GPLv3':
      link = `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
      break;
    case 'GNU LGPLv3':
      link = `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`
      break;
    case 'Mozilla Public License 2.0':
      link = `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`
      break;
    case 'Apache License 2.0':
      link = `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`
      break;
    case 'MIT License':
      link = `[MIT License](https://choosealicense.com/licenses/mit/)`
      break;
    case 'Boost Software License 1.0':
      link = `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`
      break;
    case 'The Unlicense':
      link = `[The Unlicense](https://choosealicense.com/licenses/unlicense/)`
      break;
    case 'None':
      link = ``
      break;
  };
  link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var info
  switch (license) {
    case 'GNU AGPLv3':
      info = `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`
      break;
    case 'GNU GPLv3':
      info = `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
      break;
    case 'GNU LGPLv3':
      info = `Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`
      break;
    case 'Mozilla Public License 2.0':
      info = `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`
      break;
    case 'Apache License 2.0':
      info = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
      break;
    case 'MIT License':
      info = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
      break;
    case 'Boost Software License 1.0':
      info = `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
      break;
    case 'The Unlicense':
      info = `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`
      break;
    case 'None':
      info = ``
      break;
  };
  info
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answerData) {
  console.log('thisis from generate page');
  return `
  # ${answerData.title}${renderLicenseBadge(answerData.license)}
  ## Description

  ${answerData.description}

  ## Table of Contents
  - [Installataion](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contributing)
  - [Testing Instructions](#tests)
  - [Questions]{#questions}

  ## Installation

  ${answerData.installation}

  ## Usage

  ${answerData.usage}

  ## License

  ${renderLicenseLink(answerData.license)}
  ${renderLicenseSection(answerData.license)}

  ## Contributing

  ${answerData.contribution}

  ## Tests

  ${answerData.test}

  ## Questions
`

}

module.exports = { generateMarkdown };
