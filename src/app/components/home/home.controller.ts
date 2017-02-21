import styles from '../../../assets/scss/home.scss';
import * as ShowHide from '../../actions/showHide'

class HomeController {
  constructor($ngRedux) {
    this.name = 'home';
    this.styles = styles;
    this.user = {
      name: 'guest',
      last: 'visitor'
    };
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, ShowHide)(this);
  }

  $onDestroy(){
    this.unsubscribe();
  }

  //value specifically here for testing
  addToValue10(val){
    return val + 10;
  }

  mapStateToThis(state) {
    return {
      value: state.environment
    };
  }

}

HomeController.$inject = ["$ngRedux"];

export default HomeController;
