var ghpages = require('gh-pages')
var fs = require('fs')
const { execSync } = require('child_process')

execSync('yarn run build')
fs.writeFile('build/CNAME', 'halhelms.xyz', function(err) {})
ghpages.publish('build', function(err) {})
