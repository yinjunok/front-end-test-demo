const { Builder, By } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/action-sequence');
    const demo = await dr.findElement(By.id('demo'));
    const body = await dr.findElement(By.tagName('body'));
    dr.actions()
      .mouseDown(demo)
      .mouseMove(body, { x: 300, y: 500 })
      .mouseUp(body)
      .perform();

  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
