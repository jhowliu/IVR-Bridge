import { DiagflowPage } from './app.po';

describe('diagflow App', function() {
  let page: DiagflowPage;

  beforeEach(() => {
    page = new DiagflowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
