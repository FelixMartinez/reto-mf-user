import { Component, Event, EventEmitter, State, h } from '@stencil/core';
import store from '../../commons/store/store';
import { getUsers } from '../../commons/api/user';
import { IUser } from '../../commons/model/user';
import { IAPIErrors } from '../../shared/utils/utils';

@Component({
  tag: 'user-list',
  styleUrl: 'user-list.sass',
  shadow: true,
})
export class UserList {
  @Event() customEvent: EventEmitter;
  @State() user: IUser[];
  @State() errors?: IAPIErrors;

  handleClick() {
    this.customEvent.emit('Mensaje desde el microfrontend');
  }

  getUser = async () => {
    const res = await getUsers();


    if (res.success) {
      // this.user = res.users;
      // localStorage.setItem('user', JSON.stringify(res.user));
      // console.log('user:' + res.users);
      console.log('res: ', res);
      console.log('users__ ', store.get('users'));
      store.set('users', res.users)
      console.log('users__ ', store.get('users'));
    } else {
      // this.errors = res.errors;
    }
  };

  async componentDidLoad() {
    console.log('componentDidLoad-user: ', this.user);
    this.getUser();
  }

  render() {
    return (
      <div>
        <h1>Reto User List3</h1>
        <button onClick={() => this.handleClick()}>
          Enviar evento al proyecto <span class="example">base</span>
        </button>
        <div>
          asd
        <reto-button
            id="assign-claim__btn-understood"
            text="Entendido"
            color="primary"
            size="sm"
        ></reto-button>
        <reto-input />
        </div>
      </div>
    );
  }
}
