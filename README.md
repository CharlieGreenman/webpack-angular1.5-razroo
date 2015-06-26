# A very opinionated Gulp front end infrastructure

The following are included in this build (gulps equivalent obviously)

* Watch
  * Jade
    * Watches root jade and jade includes
  * Sass
    * Watches root Sass and Sass imports
  * Javascript
    * watches all js files in the js folder
* Jade
  * Include infrastructure for Jade
  * Plumber Included so that errors do not stop watch
* Sass
  * SMACSS File Infrastructure (Sass modified)
  * Plumber Included so that errors do not stop watch
* Autoprefixer
* Eslint
    * Babel support included

* Babel
* Uglify
  * turned off by default
* BrowserSync for:
  * Jade
  * Sass
  * Javascript
* Bower
  * In distribution folder for simple file transfer
* Wiredep included for automatic bower injection
    * Works with Jade

As of now this is a prototyping tool.
###Phase 1###
TODO
* gulp-minify-css
* gulp-concat
* gulp-iconfont
* gulp-imagemin


TODO turn into Yeoman framework catering to a very specific build system 
