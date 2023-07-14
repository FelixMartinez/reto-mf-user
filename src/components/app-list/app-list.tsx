import { Component, Event, EventEmitter, State, h } from '@stencil/core';
import { IUser } from '../../commons/model/user';
import { getUsers } from '../../commons/api/user';
import store from '../../commons/store/store';

@Component({
  tag: 'app-list',
  styleUrl: 'app-list.sass',
  shadow: true,
})
export class AppList {
  @Event() customEvent: EventEmitter;
  @State() users: IUser[];

  async componentWillLoad() {
    console.log('componentDidLoad-user: ', this.users);
    this.getUser();
  }

  handleClick() {
    this.customEvent.emit('Mensaje desde el microfrontend');
  }

  render() {
    return (
      <div class="app-list">
        <h2>Listado de usuarios</h2>

        <reto-button id="assign-claim__btn-understood" text=" Enviar evento al proyecto base" color="primary" size="sm" onClick={() => this.handleClick()}></reto-button>
        <div class="content-button">
          <stencil-route-link url="/new">
            <reto-button id="assign-claim__btn-understood" text="Crear usuario" color="primary" size="sm"></reto-button>
          </stencil-route-link>
        </div>

        <div class="user-list">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>Genero</th>
                <th>Fecha de registro</th>
                <th>Fecha de actualización</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.users ? (
                this.users.map((user, index) => (
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.genero}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.updatedAt}</td>
                    <td>
                      <stencil-route-link url="/detail/stencil">
                        <reto-button id="assign-claim__btn-understood" text="Visualizar" color="primary" size="xs"></reto-button>
                      </stencil-route-link>&nbsp;
                      <reto-button id={'delete_' + index.toString()} text="Eliminar" color="secondary" size="xs"></reto-button>
                    </td>
                  </tr>
                ))
              ) : (
                <span>Loading...</span>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  getUser = async () => {
    const res = await getUsers();

    if (res.success) {
      // this.user = res.users;
      // localStorage.setItem('user', JSON.stringify(res.user));
      // console.log('user:' + res.users);
      store.set('users', res.users);
      console.log('users__ ', store.get('users'));
      this.users = store.get('users');
    } else {
      // this.errors = res.errors;
    }
  };
}
