import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.sass',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-list" exact={true} />
              <stencil-route url="/new" component="app-new" />
              <stencil-route url="/detail/:name" component="app-detail" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
