describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have proper title', () => {
    expect(browser.getTitle()).toEqual('NPM Webpack Build System');
  });

});
