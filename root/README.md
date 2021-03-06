# {%= title %}

{%= description %}

## Development

Enable "Live Reload" under Advanced in the theme customizer to turn on livereload.js for development with grunt.

## Production

After running `grunt prod` enable "Use minified assets" to use production files.

### Install Grunt and Bower

**Unfamiliar with npm? Don't have node installed?** [Download and install node.js](http://nodejs.org/download/) before proceeding.

From the command line:

1. Install `grunt-cli` and `bower` globally with `npm install -g grunt-cli bower`.
2. Navigate to the theme directory, then run `npm install`. npm will look at `package.json` and automatically install the necessary dependencies. Also run `bower install`, which installs front-end packages defined in `bower.json`.

When completed, you'll be able to run the various Grunt commands provided from the command line.

### Available Grunt commands

* `grunt dev` — Compile Sass to CSS, concatenate and validate JS
* `grunt watch` — Compile assets when file changes are made
* `grunt prod` — Create minified assets that are used on non-development environments
* `grunt package` — Runs all tasks, copies all files excluding dev files, and compresses into a zip file
* `grunt deploy` - Deploys to defined server in /grunt/rsync.js
