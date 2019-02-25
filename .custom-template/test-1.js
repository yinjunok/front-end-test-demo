const { Builder, By } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('${1}');
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
