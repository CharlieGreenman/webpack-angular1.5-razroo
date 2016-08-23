require("../assets/scss/core.scss");

import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import Common from './common/common';
import Components from './components/components';

angular.module("myApp", [
    uiRouter,
    // Common.name,
    Components.name
])
.directive("app", AppComponent);
