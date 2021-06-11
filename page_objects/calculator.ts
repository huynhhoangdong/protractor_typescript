import { browser, by, element, protractor } from 'protractor';
import { setProtractorSpeed } from '../components/tools';


class Calculator {

    firstNumber = element(by.model('first'));
    secondNumber = element(by.model('second'));
    goButton = element(by.id('gobutton'));
    latestResult = element(by.binding('latest'));
    history = element.all(by.repeater('result in memory'));
  
    add(a: number, b: number) {
      this.firstNumber.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
      browser.actions().sendKeys(protractor.Key.DELETE).perform();
      this.firstNumber.sendKeys(a);

      this.secondNumber.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
      browser.actions().sendKeys(protractor.Key.DELETE).perform();      
      this.secondNumber.sendKeys(b);

      this.goButton.click();
      console.log("ADD");
  
    }
    get countHistory() {
      console.log("History");
      return this.history;
    }
}

export default new Calculator();
