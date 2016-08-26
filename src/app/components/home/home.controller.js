class HomeController {
  constructor() {
    this.name = 'home';
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
