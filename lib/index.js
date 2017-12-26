'use strict';

const isFile = require('is-file');

module.exports = function isFileInCwd(filename = '') {
    return isFile(`${process.cwd()}/${filename}`);
};
