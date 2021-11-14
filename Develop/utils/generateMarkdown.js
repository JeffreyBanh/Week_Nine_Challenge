// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license.license == "Mit"){
        return (`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`)
    } else if (license.license == "Apache"){
        return (`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`)
    } else if (license.license == "GPLv2"){
        return (`[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n`)
    } else if (license.license == "GPLv3"){
        return (`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n`)
    } else if (license.license == "LGPLv3"){
        return ( `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)\n`)
    } else if (license.license == "AGPLv3"){
        return (`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)\n`)
    } else if (license.license == "BSD 2-clause"){
        return (`[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)\n`)
    } else if (license.license == "BSD 3-clause"){
        return ( `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n`)
    } else{
        return ""
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license.license == "Mit"){
        return (`[MIT License](https://opensource.org/licenses/MIT)`)
    } else if (license.license == "Apache"){
        return (`[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`)
    } else if (license.license == "GPLv2"){
        return (`[GPLv2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`)
    } else if (license.license == "GPLv3"){
        return (`[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)`)
    } else if (license.license == "LGPLv3"){
        return (`[LGPLv3 License](https://www.gnu.org/licenses/lgpl-3.0.en.html)`)
    } else if (license.license == "AGPLv3"){
        return (`[AGPLv3 License](https://www.gnu.org/licenses/agpl-3.0.en.html)`)
    } else if (license.license == "BSD 2-clause"){
        return (`[BSD 2-clause License](https://opensource.org/licenses/BSD-2-Clause)`)
    } else if (license.license == "BSD 3-clause"){
        return ( `[BSD 3-clause License](https://opensource.org/licenses/BSD-3-Clause)`)
    } else{
        return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    var licenselink = renderLicenseLink(license.license)
    return (`# License\n This repository is released under the ${licenselink}\n`)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    `renderLicenseBadge(data.license)\n` +
    `# ${data.title}\n` +
    `\n# Description\n ${data.description}\n` +
    `# Table of Contents\n` +
    `* [Installation](#Installation)\n` +
    `* [Usage](#Usage)\n` +
    `* [Credits](#Credits)\n` +
    `* [Contributions](#Contributions)\n` +
    `* [Tests](#Tests)\n` +
    `* [Questions](#Questions)\n` +
    `* [License](#License)\n` +
    `\n# Installation\n ${data.Installation}\n` +
    `\n# Usage\n ${data.Usage}\n` +
    `\n# Credits\n ${data.Credits}\n` +
    `\n# Contributions\n ${data.Contribution}\n` +
    `\n# Tests\n ${data.Test}\n` +
    `# Questions\n Email: ${response.email}\n Github: ${response.github}\n` 
    `\n# License\n ${renderLicenseSection(data.license)}\n`
}

module.exports = generateMarkdown;
