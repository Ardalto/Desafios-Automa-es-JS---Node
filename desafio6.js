import { chromium } from "playwright";

async function hoverEClick(){
              const browser = await chromium.launch({headless: false, timeout: 60000});
              const page = await browser.newPage();
              await page.goto("https://the-internet.herokuapp.com/hovers");
              try {
                            console.log('Iniciando a automação...');
                            const segundaImagem =await page.locator(".figure").nth(1);
                            await segundaImagem.hover();
                            const textoAbaixo = await segundaImagem.locator('h5').textContent();
                            console.log('Texto da legenda:', textoAbaixo);
              } catch (error) {
                            console.error('Erro na automação:', error);
              } finally {
                            await browser.close();
                            console.log('Automação finalizada.');
              }
}

hoverEClick();