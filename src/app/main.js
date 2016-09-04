import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';

import AppComponent from './app.component.js';
import Components from './components/components';

import{ RootReducer } from './reducers/index';

angular.module("myApp", [
    uiRouter,
    ngRedux,
    // Common.name,
    Components.name
])
.config(( $ngReduxProvider) => {
  "ngInject";
   $ngReduxProvider.createStoreWith(RootReducer);
})

.directive("app", AppComponent);
