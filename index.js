var Filter   = require('broccoli-filter'),
    jsonlint = require('jsonlint'),
    colors   = require('colors');

/**
 * JSONLint
 *
 * @param {Object} inputTree
 * 
 * @return undefined
 */
function JSONLint(inputTree) {
  if (!(this instanceof JSONLint)) {
    return new JSONLint(inputTree);
  }

  this.inputTree = inputTree;
}

JSONLint.prototype                 = Object.create(Filter.prototype);
JSONLint.prototype.constructor     = JSONLint;
JSONLint.prototype.extensions      = ['json'];
JSONLint.prototype.targetExtension = 'json';

/**
 * processString
 *
 * @param {String} content
 * @param {String} path
 * 
 * @return undefined
 */
JSONLint.prototype.processString = function (content, path) {
  console.log('jsonlint validation'.underline.green + ' ' + path.bold.cyan);
  
  try {
    jsonlint.parse(content);
    console.log('JSON file'.green + ' ' + path.bold.cyan + ' is valid'.green);
  } catch (e) {
    console.log('JSON file'.red + ' ' + path.bold.cyan + ' has errors'.red);
    console.log(e.message.bold.red);
  }
};

module.exports = JSONLint;