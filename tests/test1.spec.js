import { test, expect } from '@playwright/test';
const {LoginPage} = require('../pages/LoginPage')

test.only('has title', async ({ page }) => {
 
 const  Login = new LoginPage(page)
 await Login.gotoLoginPage();

await Login.getlist();

//  await page.goto("https://www.flipkart.com/")

//  await Login.gotoLoginPage()

// const prod=page.locator("div[class='_3sdu8W emupdz'] a");
// await prod.first()
// const prod1=await page.locator("span span").count()
// const prod2=page.locator("span span")
// prod2.waitFor()
//  console.log(await page.locator("span span").nth(9).textContent())
// for(let i=0;i< await page.locator("span span").count();++i){
//     console.log( await page.locator("span span").nth(i).textContent())
// }


//div[@class='_3sdu8W emupdz']//following::span[@class='_1XjE3T']/span
// for(let i=0;i<prod.count;++i){
// console.log(await prod.locator("span span").first().textContent())
// }
  // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
});