const { Builder, Key, By } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/mock-keyboard');
    const body = await dr.findElement(By.css('body'));
    for (var i = 0; i < 2; i++) {
      setTimeout(async function() { 
        await body.sendKeys(Key.SPACE);
      }, i * 1500);
    }
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
