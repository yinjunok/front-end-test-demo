const { Builder, By, until } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/util-wait');
    const visible = until.elementIsVisible(dr.findElement(By.id('demo')));
    await dr.wait(visible);
    console.log('等到黑块出现再执行')
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
