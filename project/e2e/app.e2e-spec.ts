import { BusinesscontactsPage } from './app.po';

describe('businesscontacts App', function() {
  let page: BusinesscontactsPage;

  beforeEach(() => {
    page = new BusinesscontactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
