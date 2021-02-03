import {browser, protractor} from 'protractor';

//https://stackoverflow.com/questions/26098593/how-can-i-open-a-new-tab-using-protractor-and-chrome-browser/47348858

class Browser {
  public async openPageInNewTab(url: string) {
    this.createNewBrowserTab();
    await this.switchToTabNumberUrl(1, url);
    // await browser.get(url);
  }

  public createNewBrowserTab() {
    browser.executeScript('window.open()');
  }

  public async switchToTabNumberUrl(number: number, url: string) {
    return browser.getAllWindowHandles().then(function (handles) {
      const newWindowHandle = handles[number];
      browser.switchTo().window(newWindowHandle).then(()=>{
          browser.get(url);
      });
    });
  }
  public async switchToTabNumber(number: number) {
    return browser.getAllWindowHandles().then(function (handles) {
      const newWindowHandle = handles[number];
      browser.switchTo().window(newWindowHandle);
    });
  }

  public async switchToBrowser(index: number) {
    // browser.actions()
    //   .sendKeys(protractor.Key.chord(protractor.Key.CONTROL, protractor.Key.SHIFT ,"n"))
    //   .perform();
    return browser.getAllWindowHandles().then(function(handles) {
      console.log("Window: " + handles.length);
      browser.switchTo().window(handles[index]); // 0 or 1 to switch between the 2 open windows
    }); 
  }
}

export default new Browser();