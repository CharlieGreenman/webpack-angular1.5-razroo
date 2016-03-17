# An NPM + Webpack + Build System

##To use run the following commands
``npm install``

``npm run jade``

``npm run watch``

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
* Sass
  * 7-1 architecture
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
* redux
  * includes redux dev tools  
* Eslint
    * Babel support included
* Autoprefixer
* NPM
  * Packages are managed through NPM



| Phase  | Task                                                                 | Complete |
|--------|----------------------------------------------------------------------|----------|
| 1      | Create base gulp build                                               | Yes      |
| 2      | Separate build for development and production                        | Yes      |
| 3      | Make build professional grade                                        | Yes      |
| 4      | Allow for Webpack use                                                | Yes      |
| 5      | Allow for use with React, React Dom and JSX, To be use with Webpack. | Yes      |
| 6      | Convert from a Gulp build to an NPM + Webpack Build                  | Yes      |
