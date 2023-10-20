// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data.license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data.license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data.license) {

  // create a conditional to check licenses
}

// function to generate markdown for README
function generateMarkdown(data) {

  // create link to deployed website if provided
  let deployedLink = "";
  if (data.deployedURL) {
    deployedLink = `

My project has been deployed and can be accessed [here](${data.deployedURL}).`
  }

  // return `readme: ${data}`;

  // add section count, if number of sections > 4 add TOC

  const TOC = {
    installation: "",
    usage: "",
    license: "",
    contributions: "",
    test: "",
  }

  const section = {
    installation: "",
    usage: "",
    license: "",
    contributions: "",
    test: "",
  }

  let sectionCount = 0;

  if (data.installation) {
    TOC.installation = `* [Installation](#installation)
`;
    section.installation = `## Installation

${data.installation}${deployedLink}


`;
    sectionCount++;
  }

  if (data.usage) {
    TOC.usage = `* [Installation](#installation)
`;
    sectionCount++;
    section.usage = `## Usage 

${data.usage}


`;
  }

  if (data.license) {
    TOC.license = `* [Installation](#installation)
`;
    sectionCount++;
  }

  if (data.contributions) {
    TOC.contributions = `* [Installation](#installation)
`;
    sectionCount++;
  }

  if (data.test) {
    TOC.test = `* [Installation](#installation)
`;
    sectionCount++;
  }

  data.usage

  const TOCtext = "";
  If (sectionCount > 3) {
    TOCtext =
`## Table of Contents
  
${TOC.installation}${TOC.usage}${TOC.license}${TOC.contributing}${TOC.tests}* [Questions](#questions)


`;
  }


  const readmeString =
`# ${data.title}

## Description 

${data.description}


${TOCtext}${section.installation}${section.usage}## License

${data.license}


## Contributing

${data.credits}


## Tests

Run the following command to run tests:

${data.test}


## Questions

Find me on GitHub: [${data.username}](https://github.com/${data.username})

or email me at [${data.email}](mailto:${data.email}) with any questions.


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, consider adding a heading called "Features" and listing them there.

## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

---
`;

return readmeString;

}

module.exports = generateMarkdown;
