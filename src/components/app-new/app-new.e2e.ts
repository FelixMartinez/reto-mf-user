import { newE2EPage } from '@stencil/core/testing';

describe('app-new', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-new></app-new>');

    const element = await page.find('app-new');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/new/joseph' });

    const newElement = await page.find('app-root >>> app-new');
    const element = newElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "app-new"', async () => {
  //   const page = await newE2EPage({ url: '/new/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> app-new >>> div');
  //   expect(element).toHaveClass('app-new');
  // });
});
