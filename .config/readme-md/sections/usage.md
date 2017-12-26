```js
'use strict';

const isFileInCwd = require('is-file-in-cwd');

// Returns `true` if a file named `README.md` is located in the
// directory that `process.cwd()` is pointing to. Returns `false`
// otherwise.
isFileInCwd('README.md');
```
