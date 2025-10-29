import { chromium } from 'playwright';

async function meuDesafio() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // --- SEU CÓDIGO VAI AQUI ---
    // Ex: await page.goto('URL_DO_EXERCICIO');
    // Ex: await page.locator('SELETOR_DO_BOTAO').click();

    await page.goto('https://www.google.com/?hl=pt_BR')
    await page.getByRole('button', { name: 'Estou com Sorte'}).click(); //page.getByRole('função', {propriedade: 'nome da propriedade'}).click();
    
    console.log('✅ Missão cumprida!');
    
    // Deixe uma pausa para você ver o resultado antes de fechar
    await page.waitForTimeout(5000); // Espera 5 segundos

  } catch (error) {
    console.error('❌ Deu ruim:', error.message);
  } finally {
    await browser.close();
  }
}

meuDesafio();