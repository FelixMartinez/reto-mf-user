import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil-community/router';

@Component({
  tag: 'app-new',
  styleUrl: 'app-new.sass',
  shadow: true,
})
export class AppNew {
  @Event() customEvent: EventEmitter;
  @Prop() match: MatchResults;

  handleClick() {
    this.customEvent.emit('Mensaje desde el microfrontend');
  }

  render() {
    return (
      <div class="app-new">
        <button onClick={() => this.handleClick()}>
          Enviar evento al proyecto <span class="example">base</span>
        </button>
        <form action="#">
          <div class="form-group">
            <reto-label label="Username"></reto-label>
            <input class="form-control" type="text" name="username" id="username" placeholder="james.bond" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input class="form-control" type="text" name="email" id="email" placeholder="james.bond@spectre.com" required />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input class="form-control" type="password" name="password" id="password" placeholder="********" required />
          </div>
          <div class="form-group">
            <label>Repeat Password</label>
            <input class="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
          </div>
          <div class="m-t-lg">
          <reto-button id="assign-claim__btn-understood" text="Registrar" color="primary" size="sm"></reto-button>
          </div>
        </form>
      </div>
    );
  }
}
