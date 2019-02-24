const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://localhost:4000');
    await until.elementIsVisible(By.id('test'))
  } finally {
    setTimeout(async () => {
      await driver.quit();
    }, 3000)
  }
})();

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:4000');
    await until.elementIsVisible(By.id('test'))
  } finally {
    setTimeout(async () => {
      await driver.quit();
    }, 3000)
  }
})();
