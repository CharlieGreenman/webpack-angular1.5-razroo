# The world's most cutting edge Webpack2 Angular 1.5 Build System

## To use run the following commands ##

``npm install``

``npm run jade``

``npm run watch``

In addition for this to work, you will have to download the chrome dev tools.

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

* PUG
  * pug-html-loader // Can write in pug and hook directly into angular template
* Sass
  * watch hot reloading
  * Included in assets folder
  * css-modules included!!!
  * Autoprefixer - Automatically adds prefixes to css when needed
* Webpack 2
  * Automatically concatenate js files
  * Allows importing and exporting modules as well
  * Ease of configuration
* NPM
  * Packages are managed through NPM
* Eslint
  * Babel support included
  * angular support
  * uses airbnb eslinter  
* redux
  * Uses ng-redux
  * redux dev tools included with use of redux tools chrome plugin
* testing
  * Mocha and chai
  * Istanbul
    * Preserves ES6 in reports
  * e2e
    * Uses protractor  
* Yarn for super uber fast package management and stuff   
* Typescript
