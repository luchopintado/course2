import { Course2Page } from './app.po';

describe('course2 App', () => {
  let page: Course2Page;

  beforeEach(() => {
    page = new Course2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
