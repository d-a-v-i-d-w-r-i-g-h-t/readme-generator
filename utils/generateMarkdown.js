const strNone = "None";
const licenseData = {
  'Apache License 2.0':{
    link: "https://choosealicense.com/licenses/apache-2.0/",
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  
  'GNU General Public License v3.0':{
    link: "https://choosealicense.com/licenses/gpl-3.0/",
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  
  'MIT License': {
    link: "https://choosealicense.com/licenses/mit/",
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },

  'BSD 2-Clause "Simplified" License': {
    link: "https://choosealicense.com/licenses/bsd-2-clause/",
    badge: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  },

  'BSD 3-Clause "New" or "Revised" License': {
    link: "https://choosealicense.com/licenses/bsd-3-clause/",
    badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },

  'Boost Software License 1.0':{
    link: "https://choosealicense.com/licenses/bsl-1.0/",
    badge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  
  'Creative Commons Zero v1.0 Universal':{
    link: "https://choosealicense.com/licenses/bsl-1.0/",
    badge: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
  },
  
  'Eclipse Public License 2.0':{
    link: "https://choosealicense.com/licenses/epl-2.0/",
    badge: "[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)",
  },
  
  'GNU Affero General Public License v3.0':{
    link: "https://choosealicense.com/licenses/agpl-3.0/",
    badge: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  },
  
  'GNU General Public License v2.0':{
    link: "https://choosealicense.com/licenses/gpl-2.0/",
    badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  },
  
  'GNU Lesser General Public License v2.1':{
    link: "https://choosealicense.com/licenses/lgpl-2.1/",
    badge: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)",
  },
  
  'Mozilla Public License 2.0':{
    link: "https://choosealicense.com/licenses/mpl-2.0/",
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  
  'The Unlicense':{
    link: "https://choosealicense.com/licenses/unlicense/",
    badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },

  None: ''
  
}


// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license != strNone) {
    badge = licenseData[license].badge;
  }
  return badge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license != strNone) {
    link = licenseData[license].link;
  }
  return link;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != strNone) {

    const licenseName = license;
    const licenseLink = renderLicenseLink(license); 

    const licenseSection = `## License

This project is licensed under the terms of the MIT license.${licenseName}

Detailed information about this license can be found [here](${licenseLink}).


`;
  }
  return licenseSection;
}

// function to generate markdown for README
function generateMarkdown(data) {

  let licenseBadge = renderLicenseBadge(data.license);

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

Run the following command to install dependencies:

\`\`\`
${data.installation}
\`\`\`${deployedLink}


`;
    sectionCount++;
  }


  // create a usage section if provided
  if (data.usage) {
    TOC.usage = `* [Usage](#usage)
`;
    sectionCount++;
    section.usage = `## Usage 

${data.usage}


`;
  }


  // add license section if desired
  if (data.license != strNone) {
    TOC.license = `* [License](#license)
`;
    sectionCount++;
    section.license = renderLicenseSection(data.license);
  }

  if (data.contributions) {
    TOC.contributions = `* [Contributions](#contributions)
`;
    sectionCount++;
    section.contributions = `## Contributing

${data.contributions}


`;
  }


  // create a test section if provided
  if (data.test) {
    TOC.test = `* [Tests](#tests)
`;
    sectionCount++;
    section.test = `## Tests

Run the following command to run tests:

\`\`\`
${data.test}
\`\`\`


`;
  }

  // create a Table of Contents section if more than 3 optional sections are included
  let TOCtext = "";
  if (sectionCount > 3) {
    TOCtext =
`## Table of Contents
  
${TOC.installation}${TOC.usage}${TOC.license}${TOC.contributions}${TOC.test}* [Questions](#questions)


`;
  }


  // build README string
  const readmeString =
`# ${data.title}

## Description ${licenseBadge}

${data.description}


${TOCtext}${section.installation}${section.usage}${section.license}${section.contributions}${section.tests}## Questions

Find me on GitHub: [${data.username}](https://github.com/${data.username})

or email me at [${data.email}](mailto:${data.email}) with any questions.

---
`;

return readmeString;

}

module.exports = {
  licenseData, 
  generateMarkdown
};
