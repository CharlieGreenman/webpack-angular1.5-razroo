require("../assets/scss/core.scss");

import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular.module("myApp", [
    uiRouter,
    Common.name,
    Components.name
])
.directive("app", AppComponent);