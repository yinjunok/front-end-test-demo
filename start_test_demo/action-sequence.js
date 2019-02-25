const { Builder, By } = require('selenium-webdriver');

// 貌似有 bug
// https://github.com/SeleniumHQ/selenium/issues/5428
(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/action-sequence');
    const demo = await dr.findElement(By.id('demo'));
    // const body = await dr.findElement(By.tagName('body'));
    demo.click();
    // dr.actions().click(demo).click(demo).perform();  
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
