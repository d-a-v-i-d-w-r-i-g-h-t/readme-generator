// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  const link = ""; // NEED TO ADD THIS *******************************

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // create a conditional to check licenses

  const licenseText = ""; // NEED TO ADD THIS *******************************
  const licenseLink = renderLicenseLink(data.license); 

  const licenseSection = `## License

${licenseText}

Detailed information about this license can be found [here](${licenseLink}).


`;

  return licenseSection;
}

// function to generate markdown for README
function generateMarkdown(data) {

  // if user did not input any description text, add a placeholder
  let descriptionText = "[insert description text here]";
  if (data.description) {
    descriptionText = data.description;
  }

  // create link to deployed website if provided
  let deployedLink = "";
  if (data.deployedURL) {
    deployedLink = `

My project has been deployed and can be accessed [here](${data.deployedURL}).`
  }

  // object for TOC contents
  const TOC = {
    installation: "",
    usage: "",
    license: "",
    contributions: "",
    test: "",
  }

  // object for optional section contents
  const section = {
    installation: "",
    usage: "",
    license: "",
    contributions: "",
    test: "",
  }


  // count how many optional sections are included to see if we need a table of contents
  let sectionCount = 0;


  // create an installation section if provided
  if (data.installation) {
    TOC.installation = `* [Installation](#installation)
`;
    section.installation = `## Installation

${data.installation}${deployedLink}


`;
    sectionCount++;
  }


  // create a usage section if provided
  if (data.usage) {
    TOC.usage = `* [Installation](#installation)
`;
    sectionCount++;
    section.usage = `## Usage 

${data.usage}


`;
  }


  // add license section if desired
  if (data.license) {
    TOC.license = `* [Installation](#installation)
`;
    sectionCount++;
    section.license = renderLicenseSection(data.license);
  }

  if (data.contributions) {
    TOC.contributions = `* [Installation](#installation)
`;
    sectionCount++;
    section.contributions = `## Contributing

${data.credits}


`;
  }


  // create a test section if provided
  if (data.test) {
    TOC.test = `* [Installation](#installation)
`;
    sectionCount++;
    section.tests = `## Tests

Run the following command to run tests:

${data.test}


`;
  }

  // create a Table of Contents section if more than 3 optional sections are included
  const TOCtext = "";
  if (sectionCount > 3) {
    TOCtext =
`## Table of Contents
  
${TOC.installation}${TOC.usage}${TOC.license}${TOC.contributing}${TOC.tests}* [Questions](#questions)


`;
  }


  // build README string
  const readmeString =
`# ${data.title}

## Description 

${data.description}


${TOCtext}${section.installation}${section.usage}${section.license}${section.contributions}${section.tests}## Questions

Find me on GitHub: [${data.username}](https://github.com/${data.username})

or email me at [${data.email}](mailto:${data.email}) with any questions.

---
`;

return readmeString;

}

module.exports = generateMarkdown;
