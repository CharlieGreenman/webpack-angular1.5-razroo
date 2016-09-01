import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Components from './components/components';

angular.module("myApp", [
    uiRouter,
    // Common.name,
    Components.name
])
.directive("app", AppComponent)

.filter('makeUppercase', function () {
  return function (item) {
    return item.toUpperCase();
  };
});
