import { ErkcTestPage } from './app.po';

describe('erkc-test App', function() {
  let page: ErkcTestPage;

  beforeEach(() => {
    page = new ErkcTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
