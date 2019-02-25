const { Builder, By } = require('selenium-webdriver');

(async function() {
  const dr = await new Builder().forBrowser('chrome').build();
  try {
    await dr.get('http://127.0.0.1:4000/attributes');
    const links = await dr.findElements(By.css('a'));
    links.map(async (link) => {
      const href = await link.getAttribute('href');
      console.log(href);
    });
  } finally {
    setTimeout(() => {
      dr.quit();
    }, 5000)
  }
}());
