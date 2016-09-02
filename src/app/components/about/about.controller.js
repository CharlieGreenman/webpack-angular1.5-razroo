import styles from '../../../assets/scss/about.scss';

class AboutController {
  constructor() {
    this.name = 'about';
    this.styles = styles;
    this.user = {
      name: 'guest',
      last: 'visitor'
    }
  }

}

export default AboutController;
