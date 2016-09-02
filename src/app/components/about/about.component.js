import template from './about.pug';
import controller from './about.controller';

let aboutComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default aboutComponent;
