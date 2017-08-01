const path = require('path');

const entryFile = './src/index.ts';
const outputFile = 'app.js';
const outputDirectory = 'dist';
const outputPath = path.join(__dirname, '../', 'dist');
const fullOutputPath = `${outputPath}/${outputFile}`;

const config = {
  entryFile,
  outputFile,
  outputPath,
  fullOutputPath
};

module.exports = config;
