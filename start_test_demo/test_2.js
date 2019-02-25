// 打开百度首页, 搜索文字

const { Builder, By, Key } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();

  try {
    await dr.get('http://www.baidu.com');
    await dr.findElement(By.id('kw')).sendKeys('selenium');
    await dr.findElement(By.id('kw')).sendKeys(Key.RETURN);
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 3000);
  }
}());

