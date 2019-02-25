const webdriver = require('selenium-webdriver');

// 测试测试环境是否搭建成功
(async function() {
  const driver = await new webdriver.Builder().forBrowser('chrome').build();
  try {
    driver.get('http://www.baidu.com');
  } finally {
    setTimeout(() => {
      driver.quit();
    }, 3000);
  }
}());

