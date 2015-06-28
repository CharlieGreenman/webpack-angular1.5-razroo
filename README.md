# A very opinionated Gulp front end infrastructure

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
*Complete*

###Phase 2###
TODO
Separate build for development and production

The following features will be moved over to production only
--> sass uglify
--> imagemin
--> concat js

###Phase 3###
TODO turn into Yeoman framework catering to a very specific build system 
