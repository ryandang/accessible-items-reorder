import { AccessibleItemsReorderPage } from './app.po';

describe('accessible-items-reorder App', () => {
  let page: AccessibleItemsReorderPage;

  beforeEach(() => {
    page = new AccessibleItemsReorderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
