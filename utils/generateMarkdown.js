// function to generate markdown for README
function generateMarkdown(responses, userInfo) {

  let readmeFile =

    `# ${responses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${responses.username}/${responses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${responses.username}/${responses.repo}?style=flat&logo=appveyor)
  
  
  ## Description 
  
  ${responses.description}
  `

  // Table of Contents
  let toc = `## Table of Contents`;

  if (responses.installation !== '') {
    toc += `
  * [Installation](#installation)` };

  if (responses.usage !== '') {
    toc += `
  * [Usage](#usage)` };

  if (responses.contributing !== '') {
    toc += `
  * [Contributing](#contributing)` };

  if (responses.tests !== '') {
    toc += `
  * [Tests](#tests)` };

  readmeFile += toc;

  // License to table of contents
  readmeFile += `
  * [License](#license)`;


  // Installation section
  if (responses.installation !== '') {

    readmeFile +=
      `
  
  ## Installation
  
  
  ${responses.installation}`
  };


  // Usage section
  if (responses.usage !== '') {

    readmeFile +=

      `
  
  ## Usage 
  
  ${responses.usage}`
  };


  // Contributing section
  if (responses.contributing !== '') {
    `
  
  ## Contributing
  
  
  ${responses.contributing}`
  };


  // Tests section
  if (responses.tests !== '') {

    readmeFile +=
      `
  
  ## Tests
  
  
  ${responses.tests}`
  };


  // License section is required
  readmeFile +=
    `
  
  ## License
  
  ${responses.license}
  `;

  let questionsSection =
    `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  if (userInfo.email !== null) {

    questionsSection +=
      `
  Email: ${userInfo.email}
  `};

  readmeFile += questionsSection;


  return readmeFile;
}

module.exports = generateMarkdown;

