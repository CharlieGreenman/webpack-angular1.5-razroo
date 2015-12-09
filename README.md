# An NPM + Webpack + Build System
![New RuB](http://media.giphy.com/media/6XO6BpBQoZHiw/giphy.gif)


##two separate builds##
The following are included in this build

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
  * 7-1 architecture
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
* JSDoc
  * Documentation for Javascript
* NPM
  * Packages are managed through NPM



| Phase  | Task                                                                 | Complete |
|--------|----------------------------------------------------------------------|----------|
| 1      | Create base gulp build                                               | Yes      |
| 2      | Separate build for development and production                        | Yes      |
| 3      | Make build professional grade                                        | Yes      |
| 4      | Allow for Webpack use                                                | Yes      |
| 5      | Allow for use with React, React Dom and JSX, To be use with Webpack. | Yes      |
| 6      | Convert from a Gulp build to an NPM + Webpack Build                  | Almost   |

