import styles from './home.css';

class HomeController {
  constructor() {
    this.name = 'home';
    this.styles = styles;
    this.user = {
      name: 'guest',
      last: 'visitor'
    }
  }

  search(){
    console.log('controller works');
  };

}

export default HomeController;
