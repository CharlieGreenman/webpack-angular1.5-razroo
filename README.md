# An NPM + Webpack + Angular 1.5 Build System

##To use run the following commands
``npm install``

``npm run jade``

``npm run watch``

This build is largely influenced by the architecture found in the [article here](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)
. In addition, as Angular 1.5 introduces components, this build is going to try and be as progressive as possible. Some
 of the things that are in the pipeline, are css-modules, testing with jasmine, karma and protracter, ng-redux, and
 eslint.

 Some of the things that this build already includes. Webpack

* Watch
  * Jade
    * Watches root jade and jade includes
  * Javascript
    * watches all js files in the js folder
* Jade
  * Include infrastructure for Jade
* Sass
  * Archtiecture TODO
* Webpack
  * For this project included as a gulp stream
  * will automatically concatenate js files
  * uses babel with js and allows for importing and exporting modules as well
* Babel-loader
  * allow for es6 to es5 conversion
*Jsx-loader
  * allow for Jsx support with React
* Eslint
    * Babel support included
* Autoprefixer
* NPM
  * Packages are managed through NPM



| Phase  | Task                                                                 | Complete |
|--------|----------------------------------------------------------------------|----------|
| 1      | Create base webpack build                                            | Yes      |
| 2      | Separate build for development and production                        | Yes      |
| 3      | Add css-modules                                                      | No       |
| 4      | Add ng-redux                                                         | No       |
| 5      | Add Protracter to app                                                | No       |
| 6      | Add Karma and Jasmine                                                | No       |
