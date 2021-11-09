const fs = require ('fs-extra');
const path = require ('path');

const dirPath = path.join(__dirname, '../reports');

fs.emptyDirSync(dirPath);