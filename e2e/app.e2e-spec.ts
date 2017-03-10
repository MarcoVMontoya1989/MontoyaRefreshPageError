import { RecipesCorrectionPage } from './app.po';

describe('recipes-correction App', function() {
  let page: RecipesCorrectionPage;

  beforeEach(() => {
    page = new RecipesCorrectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
