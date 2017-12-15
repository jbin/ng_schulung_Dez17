import { AppPage } from './app.po';
import { browser, by } from 'protractor';

describe('stones App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.wait(function() {
      return browser.isElementPresent(by.css('.dumdidum'));
    }, 2000);
    expect(page.getParagraphText()).toEqual('Welcome to stn!');
  });
});
