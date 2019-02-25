const { Builder, By } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://www.baidu.com');
    const hideBtn = "arguments[0].style.display='none';";
    await dr.executeScript(hideBtn, dr.findElement(By.id('su')));

    var linkTexts = "return $('.mnav').text()"
    console.log(await dr.executeScript(linkTexts))

    // 最后把页面背景变成黑色
    await dr.executeScript("document.body.style.backgroundColor='black'");
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
