const { Builder, By } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/select');
    const options = await dr.findElements(By.css('option'));
    setTimeout(() => {
      options[options.length - 1].click();
    }, 2000)
    
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
