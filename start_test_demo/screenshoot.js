const { Builder } = require('selenium-webdriver');
const fs = require('fs');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://www.baidu.com');
    const data = await dr.takeScreenshot();
    fs.writeFileSync('pic.png', data, 'base64');
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
