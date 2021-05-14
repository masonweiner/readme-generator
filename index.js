const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Project title:",
      name: "title",
    },
    {
      type: "input",
      message: "What was your motivation?",
      name: "motivation",
    },
    {
      type: "input",
      message: "Why did you build this project? What problem does it solve? ",
      name: "why",
    },
    {
      type: "input",
      message: "What did you learn?",
      name: "learn",
    },
    {
      type: "input",
      message: "What steps are required to install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples for use:",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "License?",
      name: "license",
      choices: [{ value: "MIT License" }, { value: "GNU GPLv3" }],
    },
    {
      type: "input",
      message: "List your collaborators and their github URLs",
      name: "collaborators",
    },
    {
      type: "input",
      message: "Tests:",
      name: "tests",
    },
    {
      type: "input",
      message: "GitHub Username:",
      name: "github",
    },
    {
      type: "input",
      message: "Email:",
      name: "email",
    },
  ])
  .then((response) =>
    fs.writeFile("README.md", getReadme(response), (err) =>
      err ? console.log(err) : console.log("success")
    )
  );

const getReadme = (response) => {
  let readme = "";
  if (response.license[0] === "GNU GPLv3") {
    readme = `# ${response.title}
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

- ${response.motivation}
- ${response.why}
- ${response.learn}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

- ${response.installation}

## Usage

- ${response.usage}

## License

- ${response.license}

## Contributing

- ${response.collaborators}

## Tests

- ${response.tests}

## Questions

- [GitHub URL](https://github.com/${response.github})
- <${response.email}>
`;
  } else if (response.license[0] === "MIT License") {
    readme = `# ${response.title}
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

- ${response.motivation}
- ${response.why}
- ${response.learn}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

- ${response.installation}

## Usage

- ${response.usage}

## License

- ${response.license}

## Contributing

- ${response.collaborators}

## Tests

- ${response.tests}

## Questions

- [GitHub URL](https://github.com/${response.github})
- <${response.email}>
`;
  } else {
    readme = `# ${response.title}

## Description

- ${response.motivation}
- ${response.why}
- ${response.learn}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

- ${response.installation}

## Usage

- ${response.usage}

## Contributing

- ${response.collaborators}

## Tests

- ${response.tests}

## Questions

- [GitHub URL](https://github.com/${response.github})
- <${response.email}>
`;
  }
  return readme;
};
