import styles from '../../../assets/scss/home.scss';
import showHide from '../../actions/showHide'

class HomeController {
  constructor($ngRedux) {
    this.name = 'home';
    this.styles = styles;
    this.user = {
      name: 'guest',
      last: 'visitor'
    };
    /* eslint-disable */
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, showHide)(this);
  }

  $onDestroy(){
    this.unsubscribe();
  }

  testConsole(){
    // console.log(showBlock());
    // $ngRedux.dispatch(dispatchshowBlock());
    console.log('function works');
  }

  mapStateToThis(state) {
    return {
      value: state.environment
    };
  }

}

HomeController.$inject = ["$ngRedux"];

export default HomeController;
