const { Builder, By } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://www.testclass.net/');
    const title = await dr.getTitle();
    console.log(title);
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
