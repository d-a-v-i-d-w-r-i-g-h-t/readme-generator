// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // create a conditional to check licenses
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // use each of the object.keys to insert the correct data into the correct sections
  return `readme: ${data}`;
  return `# ${data.title}

  ## Description 
  
  ${data.description}


  ## Table of Contents (Optional)
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  

  ## Installation
  
  ${data.installation}

  
  ## Usage 
  
  ${data.usage}
  
  
  ## Credits
  
  ${data.credits}
  
  
  ## License
  
  ${data.license}
  
  
  ---
  
  🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, consider adding a heading called "Features" and listing them there.
  
  ## Contributing
  
  If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them.
  
  ---
`;


// take responses in 

}

module.exports = generateMarkdown;
