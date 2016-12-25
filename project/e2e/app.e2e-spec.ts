import { OnlineCoursesPage } from './app.po';

describe('online-course-tracker App', function() {
  let page: OnlineCoursesPage;

  beforeEach(() => {
    page = new OnlineCoursesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
