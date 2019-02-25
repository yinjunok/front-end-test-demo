const { Builder } = require('selenium-webdriver');

jest.setTimeout(30000);

describe('UI 测试用例', () => {
  it('isVisible', async () => {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://127.0.0.1:4000/assert')
      const title = await driver.getTitle();
      expect(title).toBe('一个标题');
    } finally {
      await driver.quit();
    }
  })
});
