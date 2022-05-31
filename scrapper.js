const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const listItemsInitial = await page.$$('a[class="offer-details__title-link"]');
  const listItemsArray = Array.from(listItemsInitial);
  for (listItem of listItemsArray) {
    const linkUnformatted = await listItem.getProperty('href');
    const jobTitle = await listItem.getProperty('textContent');
    console.log({ 
      'link': await linkUnformatted.jsonValue(),
      'job title': await jobTitle.jsonValue(),
    });
  }
  browser.close();
}

scrapeProduct('https://www.pracuj.pl/praca');