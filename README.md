Slabs
=======

Slabs Framework is an amazing extension for [Bootstrap](http://github.com/twbs/bootstrap), ready to help developers to create amazing websites in minutes.

## Quick start

Three quick start options are available:

Read the [Getting started page](http://boltech.github.io/Slabs/getting-started/) for information on the framework contents, examples and more.

## Documentation

Slabs's documentation is build using [Jekyll](http://jekyllrb.com/) and hosted on Github pages at [http://boltech.github.io/Slabs/](http://boltech.github.io/Slabs/). You should be able to run them locally.


### Running documentation locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) and other Ruby dependencies with `bundle install`.
   **Note for Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.
2. From the root `/slabs` directory, run `jekyll serve` in the command line.
3. Open <http://localhost:9001> in your browser. That simple!

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

## Compiling CSS and JavaScript

Slabs uses [Grunt](http://gruntjs.com/) to compile all Sass code of this framework. Remember to install dependencies before running any Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/Slabs` directory, then run `npm install`. npm will look at [package.json](https://github.com/twbs/bootstrap/blob/master/package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

What is npm? Keep calm and install node. NPM stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`.


## Credits

<!-- feel free to make these link wherever you wish -->
* [Jorge Najera](https://twitter.com/Jorge_Najera)
