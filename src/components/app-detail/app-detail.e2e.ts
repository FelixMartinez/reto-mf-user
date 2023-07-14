import { newE2EPage } from '@stencil/core/testing';

describe('app-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-detail></app-detail>');

    const element = await page.find('app-detail');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/detail/joseph' });

    const detailElement = await page.find('app-root >>> app-detail');
    const element = detailElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "app-detail"', async () => {
  //   const page = await newE2EPage({ url: '/detail/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> app-detail >>> div');
  //   expect(element).toHaveClass('app-detail');
  // });
});
