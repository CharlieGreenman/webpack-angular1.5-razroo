import styles from '../../../assets/scss/about.scss';

class AboutController {
  public name: string;
  public styles: any;
  public user: any;
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
