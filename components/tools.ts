import { browser, by, ElementFinder, protractor } from "protractor";
import * as faker from 'faker';
//https://stackoverflow.com/questions/24960290/can-protractor-be-made-to-run-slowly

export const setProtractorSpeed =(speed:number)=> {
    // Make protractor run slowly
    let origFn = browser.driver.controlFlow().execute;
    browser.driver.controlFlow().execute = function() {
        let args = arguments;
        // queue ms wait
        origFn.call(browser.driver.controlFlow(), function() {
            return protractor.promise.delayed(speed);
        });
        return origFn.apply(browser.driver.controlFlow(), args);
    };
}

//https://stackoverflow.com/questions/21933268/how-to-set-focus-on-a-section-of-my-web-page-then-scroll-down
export const scrollInToView = (targetElement: ElementFinder) => {

    let scrollIntoView = function () {
        arguments[0].scrollIntoView();
    };
    browser.executeScript(scrollIntoView, targetElement);

}

export const clickRandomItemFromList =(element: ElementFinder)=> {
    let options = element.all(by.tagName('option'));
    options.count().then((count)=>{
        options.then((option)=>{
            let index = faker.random.number({min:1, max:count-1});
            console.log("The number of option: " + count + " index: " + index);
            option[index].click();
        });
    });
}

export const imagePath = "F:\\Tester\\09_Protractor\\images\\dropin\\"