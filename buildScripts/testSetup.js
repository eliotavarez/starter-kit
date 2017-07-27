//This file isn't transpile

// Register babel to transpile before our tests run
require('babel-register')();

// Disabel webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};