'use strict';

const isFile = require('is-file');

module.exports = function isFileInCwd() {
    return isFile(`${process.cwd()}/${filename}`);
};
