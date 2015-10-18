# A Webpack + Gulp Build System goin' Hamm
![goin' ham with Hamm](http://33.media.tumblr.com/dde15901a30e33fda2db472bd3e5849e/tumblr_inline_mi5adv4Qyh1rompwx.gif)


##two separate builds##
There is a default build for development.
There is a production build, that goes into the folder called publish.
To use production, type in your terminal, or cmd gulp publish.

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
* Webpack
  * For this project included as a gulp stream
  * will automatically concatenate js files
  * uses babel with js and allows for importing and exporting modules as well
* Babel-loader
  * allow for es6 to es5 conversion
*Jsx-loader
  * allow for Jsx support with React
* React
  * along with webpack simply call var React = require("./react");
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
  * js files automatically included using wiredep
* Wiredep included for automatic bower injection
    * Works with Jade + jade include file structure
    *
* Imagemin
    * Png + SVG + JPG GIF images minified
* Spritesmith
    * turn all of your png's into ready to use sprite images
* Concat JS files
  * all js files in repository are concatenated together

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
Allow for webpack use
_*complete*_

###Phase 5###
TODO turn into Slush catering to a very specific build system
  * In particular, keep in mind things which may be very specific, and user may not want. Such as foundation, jade, webpack, react, etc. 

The following will become optional in yeoman framework
