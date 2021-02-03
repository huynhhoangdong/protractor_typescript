import { browser, Config } from 'protractor';

export let config: Config = {
  directConnect: true,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      w3c: false
    }
  },
  specs: ['**/dropin.spec.js'],
  onPrepare: ()=> {
    browser.waitForAngularEnabled(false);
  }
 // seleniumAddress: 'http://localhost:4444/wd/hub',
};
