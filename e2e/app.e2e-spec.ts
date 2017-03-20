import { Phase3Page } from './app.po';

describe('phase3 App', () => {
  let page: Phase3Page;

  beforeEach(() => {
    page = new Phase3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
