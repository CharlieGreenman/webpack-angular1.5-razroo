# A very opinionated Gulp front end infrastructure

##two separate builds##
There is a default build for development
There is a production build, that goes into the folder called publish
To use is, type gulp publish

The following are included in this build (gulps equivalent obviously)

* Watch
  * Jade
    * Watches root jade and jade includes
  * Sass
    * Watches root Sass and Sass imports
    * uglifies/minifies sass
  * Javascript
    * watches all js files in the js folder
* Jade
  * Include infrastructure for Jade
  * Plumber Included so that errors do not stop watch
* Sass
  * SMACSS File Infrastructure (Sass modified)
  * Plumber Included so that errors do not stop watch

* Babel
* Eslint
    * Babel support included
* Autoprefixer
* BrowserSync for:
  * Jade
  * Sass
  * Javascript
* JSDoc
  * Documentation for Javascript
* Bower
  * In distribution folder for simple file transfer
* Wiredep included for automatic bower injection
    * Works with Jade + jade include file structure
    *
* Imagemin
    * Png + SVG + JPG GIF images minified
* Concat JS files
  * all js files in repository are concatenated together

As of now this is a prototyping tool.
###Phase 1###
Create base gulp build
_*Complete*_

###Phase 2###
TODO
Separate build for development and production

The following features will be moved over to production only
--> sass uglify
--> imagemin
--> concat js

_*complete*_

###Phase 3###
Make build production ready
* allow for quick clone/downloading
* allow for sudo npm install to download all appropiate packages
* allow for bower install to download foundation

_*complete*_

###Phase 4###
TODO turn into Yeoman framework catering to a very specific build system 

The following will become optional in yeoman framework