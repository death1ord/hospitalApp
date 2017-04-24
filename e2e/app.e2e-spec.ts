import { HospitalApp } from './app.po';

describe('Hospital App', () => {
  let page: HospitalApp;

  beforeEach(() => {
    page = new HospitalApp();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
