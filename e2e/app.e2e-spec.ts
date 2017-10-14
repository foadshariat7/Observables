import { ObservablesPage } from './app.po';

describe('observables App', () => {
  let page: ObservablesPage;

  beforeEach(() => {
    page = new ObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
