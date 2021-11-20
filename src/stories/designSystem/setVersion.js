const fs = require('fs');
const path = require('path');

const package = require('../../../package.json');
const introduction = path.resolve(__dirname, 'introduction.stories.mdx');


fs.readFile(introduction, 'utf8', (error, data) => {
  if (error) return console.error(error);

  const replaceThis = /## This is version: 1.2.3 <!-- replace in prebuild -->/;
  const withThis = `## This is version: ${package.version} <!-- replace in prebuild -->`;

  const newFile = data.replace(replaceThis, withThis);

  fs.writeFile(introduction, newFile, 'utf8', (error) => {
    if (error) return console.error(error);
  });
});
