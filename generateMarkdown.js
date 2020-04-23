function generateMarkdown(data) {
  return `
# GitHub README Generator 
### ${data.title}
### ${data.desc}

## Table Of Contents 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Test](#Tests)

#### Installation ${data.install}
![badge](https://img.shields.io/badge/INSTALL-${data.install}-GREEN)
#### Usage ${data.usage}
#### License ${data.license}
![badge](https://img.shields.io/badge/LICENSE-${data.license}-RED)
#### Contributors ${data.contributors}
#### Tests ${data.tests}
![badge](https://img.shields.io/badge/LICENSE-${data.tests}-RED)


# ![picture](${data.picture})
# ${data.email}

`;
}

module.exports = generateMarkdown;

