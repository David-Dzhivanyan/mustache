const fs = require('fs');
const path = require('path');

const getAllFilesInPathSync = (src, files = [], recursive = true) => {
  fs.readdirSync(src).forEach((file) => {
    const name = path.join(src, file);
    if (fs.statSync(name).isDirectory() && recursive)  getAllFilesInPathSync(name, files)
    else files.push(name);
  });
  return files;
};

module.exports = getAllFilesInPathSync;