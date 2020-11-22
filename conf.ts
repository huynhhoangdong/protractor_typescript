import { Config } from 'protractor';

export let config: Config = {
  directConnect: true,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
  },
  specs: ['**/**.spec.js'],
 // seleniumAddress: 'http://localhost:4444/wd/hub',
};
