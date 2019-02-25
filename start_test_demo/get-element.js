const { Builder, By } = require('selenium-webdriver');

// 用元素 ID 查找元素
async function byId() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/get-element');
    await dr.findElement(By.id('input__text')).sendKeys('测试教程网');
    await dr.findElement(By.id('input__password')).sendKeys('password');
    await dr.findElement(By.id('input__webaddress')).sendKeys('http://www.itest.info');
    await dr.findElement(By.id('input__emailaddress')).sendKeys('service@itest.info');
    await dr.findElement(By.id('input__phone')).sendKeys('13888888888');
    await dr.findElement(By.id('input__search')).sendKeys('keywords');
    await dr.findElement(By.id('input__text2')).sendKeys('6666666');
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}

// 用 name 属性查找元素
async function byName() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/get-element');
    dr.findElement(By.name('username')).sendKeys('测试');
    dr.findElement(By.name('password')).sendKeys('password');
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}

// 用 class 查找元素
async function byClass() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/get-element');
    dr.findElement(By.className('is-error')).sendKeys('错误');
    dr.findElement(By.className('is-valid')).sendKeys('我打江南走过');
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}

// 用 css 选择器查找元素
async function bySelector() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/get-element');
    await dr.findElement(By.css('#input__search-2')).sendKeys('错误');
    await dr.findElement(By.css('input[type="number"')).sendKeys('12345');
    await dr.findElement(By.css('.is-error-2')).sendKeys('should be error');
    await dr.findElement(By.css('.is-valid-2')).sendKeys('should be valid');
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}

// 启动
(async function() {
  await byId();
  await byName();
  await byClass();
  await bySelector();
}());
