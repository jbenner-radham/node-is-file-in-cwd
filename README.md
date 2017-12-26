is-file-in-cwd
==============
Check if a filename is in the current working directory.

Install
-------
```sh
$ yarn add is-file-in-cwd # Or alternatively: `npm install --save is-file-in-cwd`
```

Usage
-----
```js
'use strict';

const isFileInCwd = require('is-file-in-cwd');

// Returns `true` if a file named `README.md` is located in the
// directory that `process.cwd()` is pointing to. Returns `false`
// otherwise.
isFileInCwd('README.md');
```

Testing
-------
```sh
$ yarn test # Or alternatively: `npm test`
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.
