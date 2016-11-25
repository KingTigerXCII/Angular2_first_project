import { Angular2FirstProjectPage } from './app.po';

describe('angular2-first-project App', function() {
  let page: Angular2FirstProjectPage;

  beforeEach(() => {
    page = new Angular2FirstProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
