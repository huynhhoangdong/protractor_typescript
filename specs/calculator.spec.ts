import { browser, by, element } from 'protractor';
import { setProtractorSpeed } from '../components/tools';
import Calculator from "../page_objects/calculator";


setProtractorSpeed(100);
describe('Protractor Demo App', () => {
  // const firstNumber = element(by.model('first'));
  // const secondNumber = element(by.model('second'));
  // const goButton = element(by.id('gobutton'));
  // let latestResult = element(by.binding('latest'));
  // let history = element.all(by.repeater('result in memory'));

  // function add(a: number, b: number) {
  //   firstNumber.sendKeys(a);
  //   secondNumber.sendKeys(b);
  //   goButton.click();
  // }

  beforeEach(() => {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', () => {
    Calculator.add(1, 2);
    browser.sleep(1000);
    Calculator.add(3, 4);
    browser.sleep(5000);
   
    expect(Calculator.countHistory.count()).toEqual(2);

    // Calculator.add(5, 6);
    // browser.sleep(1000);
    // expect(Calculator.countHistory.count()).toEqual(3);

    
  });
});
