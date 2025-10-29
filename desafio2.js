import { chromium } from "playwright";

async function escreverEClicar() {
              console.log('Iniciando a automação...')

              const browser = await chromium.launch({ headless: false, timeout: 600}) // Aumenta o tempo limite para 60 segundos;
              const page = await browser.newPage();
              const url = 'https://the-internet.herokuapp.com/login';

              try {
                            console.log(`Acessando ao site ${url}...`)
                            await page.goto(url);
                            await page.getByRole('textbox', { name: 'username'}).fill('tomsmith');
                            await page.getByRole('textbox', {name: 'password'}).fill ('SuperSecretPassword!');
                            await page.locator('button', {type: 'submit'}).click();
                            console.log('Login realizado com sucesso!');
              }
              catch (error) {
                            console.error('Erro durante a automação:', error);
              }
              finally {
                            await browser.close(); //Sempre usar o finally para fechar o browser
                            console.log('Automação finalizada.');
              }
}

escreverEClicar();