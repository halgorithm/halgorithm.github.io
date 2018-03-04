var ghpages = require('gh-pages');
var fs = require('fs');
const { execSync } = require('child_process');

execSync('yarn run build');
ghpages.publish('build', function(err) {});
