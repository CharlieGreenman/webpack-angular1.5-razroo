import template from './home.pug';
import controller from './home.controller';

let homeComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default homeComponent;
