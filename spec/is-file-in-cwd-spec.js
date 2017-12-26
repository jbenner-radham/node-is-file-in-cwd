'use strict';

const any = jasmine.any;
const isFileInCwd = require('../');

describe('isFileInCwd', function () {
    it('is a function', function () {
        expect(isFileInCwd).toEqual(any(Function));
    });

    it('returns a Boolean', function () {
        expect(isFileInCwd()).toEqual(any(Boolean));
    });
});
