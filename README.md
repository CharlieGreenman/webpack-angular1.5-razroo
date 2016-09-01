# An NPM + Webpack + Angular 1.5 Build System

## To use run the following commands ##

``npm install``

``npm run jade``

``npm run watch``

Build is influenced by architecture found in the [AngularJS Best Practices: Directory Structure Article](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)

### The following is the file architecture for this project ###
- app
  - shared   // acts as reusable components or partials of our site
    - sidebar/
      - sidebarDirective.js
      - sidebarView.html
    - article/
      - articleDirective.js
      - articleView.html
  - components/   // each component is treated as a mini Angular app
    - home/
      - homeController.js
      - homeService.js
      - homeView.html
    - blog/
      - blogController.js
      - blogService.js
      - blogView.html
  - app.module.js
  - app.routes.js
- assets/
  - img         // Images and icons for your app
  - css      // All styles and style related files (SCSS or LESS files)
  - js       // JavaScript files written for your app that are not for angular
  - libs     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html

As Angular 1.5 introduces components, this build tries to be as progressive as possible. For instance, it uses css-modules, testing with jasmine, karma, protracter, ng-redux, and eslint.

 Some of the things that this build includes. Webpack

* `npm Start`
  * Jade
    * pug-html-loader // Can write in pug and hook directly into angular template
  * Javascript
    * ES6
* Sass
  * watch hot reloading
  * Included in assets folder
  * Uses css-modules
* Webpack
  * For this project included as a gulp stream
  * will automatically concatenate js files
  * uses babel with js and allows for importing and exporting modules as well
* Babel-loader
  * allow for es6 to es5 conversion
* Eslint
    * Babel support included
    * angular support
    * uses airbnb eslinter
* Autoprefixer
  * Automatically adds prefixes to css when needed
* NPM
  * Packages are managed through NPM



| Priority  | Todo                                                                 |
|-----------|----------------------------------------------------------------------|
| 1         | Routing                                                              |
| 2         | ng-redux                                                             |
| 3         | Protracter                                                           |
| 4         | Karma and Jasmine                                                    |
