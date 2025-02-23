const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
    args: ["--window-size=1440,900"]
  });

  const page = await browser.newPage();

  await page.goto("https://namastedev.com/");

  console.log("webpage loaded");
  await page.setViewport({width:1440, height:900});

  const coursesPagelink = "body > main > div:nth-child(4) > div > div.relative.w-full.m-0.p-0.overflow-hidden > div.absolute.top-56.w-full.text-center > div.flex.justify-center.gap-4 > span";

  await page.waitForSelector(coursesPagelink)

  await page.click(coursesPagelink)

  const systemDesign = "body > main > div:nth-child(4) > div.ml-0> div > div.flex.flex-wrap.gap-5 > a:nth-child(2)"

  await page.waitForSelector(systemDesign)

  await page.click(systemDesign)

  await browser.close()
})();
