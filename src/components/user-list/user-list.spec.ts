import { newSpecPage } from '@stencil/core/testing';
import { UserList } from './user-list';

describe('user-list', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [UserList],
      html: '<user-list></user-list>',
    });
    expect(root).toEqualHtml(`
      <user-list>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </user-list>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [UserList],
      html: `<user-list first="Stencil" last="'Don't call me a framework' JS"></user-list>`,
    });
    expect(root).toEqualHtml(`
      <user-list first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </user-list>
    `);
  });
});
