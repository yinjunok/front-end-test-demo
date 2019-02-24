const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');

jest.setTimeout(30000);

describe('UI 测试用例', () => {
  it('isVisible', async () => {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://127.0.0.1:4000')
    const title = await driver.findElement(By.id('test')).getText()
    expect(title).toBe('123');
    } finally {
      await driver.quit();
    }

    // async function getElementById(id) {
    //   const el = await driver.wait(until.elementLocated(By.id(id)), 1000)
    //   return await driver.wait(until.elementIsVisible(el), 1000)
    // }
  })
});


// (async function example() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://localhost:4000');
//     await until.elementIsVisible(By.id('test'))
//   } finally {
//     setTimeout(async () => {
//       await driver.quit();
//     }, 3000)
//   }
// })();

// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('http://localhost:4000');
//     await until.elementIsVisible(By.id('test'))
//   } finally {
//     setTimeout(async () => {
//       await driver.quit();
//     }, 3000)
//   }
// })();
