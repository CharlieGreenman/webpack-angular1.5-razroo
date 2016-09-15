import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux  from 'ng-redux';

import AppComponent from './app.component.js';
import Components from './components/components';

import{ RootReducer } from './reducers/index';
import createLogger from 'redux-logger';

// import configureStore from "./store/configureStore";
// const store = configureStore();

angular.module("myApp", [
    uiRouter,
    ngRedux,
    // Common.name,
    Components.name
])
.config(( $ngReduxProvider) => {
  "ngInject";

  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

   $ngReduxProvider.createStoreWith(RootReducer, [logger]);
})

.directive("app", AppComponent);
