import { chromium } from "playwright";

async function escolherCheckboxes(){
              console.log('Iniciando a automação...')

              const browser = await chromium. launch({ headless: false, timeout: 600}) // Aumenta o tempo limite para 60 segundos;
              const page = await browser.newPage();
              var url = 'https://the-internet.herokuapp.com/checkboxes';

              try {
                            console.log(`Acessando ao site ${url}...`)
                            await page.goto(url);
                            await page.locator('#checkboxes input[type="checkbox"]').nth(0).click();//todo o caminho do locator precisa estar dentro de aspas simples ou duplas
                            await page.locator('#checkboxes input[type="checkbox"]').last().click();
              }

              catch (error) {
                            console.error('Erro durante a automação:', error);
              }

              finally {
                            //await browser.close();
                            console.log('Automação finalizada.');
              }
}

escolherCheckboxes();