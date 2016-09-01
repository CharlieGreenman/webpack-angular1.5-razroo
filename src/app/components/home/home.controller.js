import styles from '../../../assets/scss/home.scss';

class HomeController {
  constructor() {
    this.name = 'home';
    this.styles = styles;
    this.user = {
      name: 'guest',
      last: 'visitor'
    }
  }

}

export default HomeController;
