import { chromium } from "playwright";

async function esperaInteligente(){
              const browser = await chromium.launch({headless:false, timeout: 60000});
              const page = await browser.newPage();
              var url = "https://the-internet.herokuapp.com/dynamic_controls";
              await page.goto(url);
              try {
                            console.log('Iniciando a automação...');
                            await page.getByRole('button', { name: 'Remove' }).click();
                            const message = await page.locator('#message').innerText();
                            console.log('Mensagem exibida:', message);
              }

              catch (error) {
                            console.error('Erro na automação:', error);
              } finally {
                            // await browser.close();
                            console.log('Automação finalizada.');
              }
}

esperaInteligente();