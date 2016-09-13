import styles from '../../../assets/scss/home.scss';

class HomeController {
  constructor($ngRedux) {
    this.name = 'home';
    this.styles = styles;
    this.user = {
      name: 'guest',
      last: 'visitor'
    };
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  }

  $onDestroy(){
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      todos: state.todos
    };
  }

}

HomeController.$inject = ["$ngRedux"];

export default HomeController;
