const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const el = await page.$$('li[class="results__list-container-item"]');
  //const txt = await el.getProperty('content');
  //const rawTxt = await txt.jsonValue();

  console.log(Array.from(el).length);

  browser.close();

}

scrapeProduct('https://www.pracuj.pl/praca');