import { chromium } from "playwright";

async function choseSecondOption() {
              const browser = await chromium.launch({headless: false, timeout: 600});
              const page = await browser.newPage();
              await page.goto("https://the-internet.herokuapp.com/dropdown");

              try {
                           console.log('Iniciando a automação...');
                           await page.selectOption('#dropdown', { value: '2' });
                           console.log('Segunda opção selecionada com sucesso!');
              } catch (error) {
                           console.error('Erro ao selecionar a segunda opção:', error);
              } finally {
                            // await browser.close();
                            console.log('Automação finalizada.');
              }
}

choseSecondOption();