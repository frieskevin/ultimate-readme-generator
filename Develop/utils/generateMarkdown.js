//Function to generate markdown
function generateMarkdown(answerData) {
  var badge = '';
  var link = '';
  var info = '';
  //Shows all license data according to license input
  switch (answerData.license) {
    case 'GNU AGPLv3':
      info = `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`
      link = `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`
      badge = `![](https://img.shields.io/badge/license-GNU%20AGPLv3-green)`
      break;
    case 'GNU GPLv3':
      info = `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
      link = `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
      badge = `![](https://img.shields.io/badge/license-GNU%20GPLv3-green)`
      break;
    case 'GNU LGPLv3':
      info = `Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`
      link = `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`
      badge = `![](https://img.shields.io/badge/license-GNU%20LGPLv3-green)`
      break;
    case 'Mozilla Public License 2.0':
      info = `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`
      link = `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`
      badge = `![](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-green)`
      break;
    case 'Apache License 2.0':
      info = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
      link = `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`
      badge = `![](https://img.shields.io/badge/license-Apache%20License%202.0-green)`
      break;
    case 'MIT License':
      info = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
      link = `[MIT License](https://choosealicense.com/licenses/mit/)`
      badge = `![](https://img.shields.io/badge/license-MIT%20License-green)`
      break;
    case 'Boost Software License 1.0':
      info = `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
      link = `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`
      badge = `![](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-green)`
      break;
    case 'The Unlicense':
      info = `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`
      link = `[The Unlicense](https://choosealicense.com/licenses/unlicense/)`
      badge = `![](https://img.shields.io/badge/license-The%20Unlicense-green)`
      break;
    case 'None':
      info = ``
      link = ''
      badge = ''
      break;
  };

  //Markdown output with captured data input
  return `
  # ${answerData.title}
  ${badge}

  ## Description

  ${answerData.description}

  ## Table of Contents
  - [Installataion](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contributing)
  - [Testing Instructions](#tests)
  - [Questions](#questions)

  ## Installation

  ${answerData.installation}

  ## Usage

  ${answerData.usage}

  ## License

  ${link}

  ${info}

  ## Contributing

  ${answerData.contribution}

  ## Tests

  ${answerData.test}

  ## Questions

  For any questions, contact at the following email or Github.

  [${answerData.email}](${answerData.email})

  [${answerData.github}](https://www.github.com/${answerData.github})
  
`

}

//Exports generateMarkdown function to other pages
module.exports = { generateMarkdown };
