import { browser, by, element } from 'protractor';

describe('Protractor Demo App', () => {
  const firstNumber = element(by.model('first'));
  const secondNumber = element(by.model('second'));
  const goButton = element(by.id('gobutton'));
  let latestResult = element(by.binding('latest'));
  let history = element.all(by.repeater('result in memory'));

  function add(a: number, b: number) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(() => {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', () => {
    add(1, 2);
    add(3, 4);
    expect(history.count()).toEqual(2);

    add(5, 6);
    expect(history.count()).toEqual(3);

    expect(history.last().getText()).toContain('1 + 2');
  });
});
