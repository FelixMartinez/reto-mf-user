import { createStore } from "@stencil/store";
import { IUser } from "../model/user";

const initialState: IUser[] = [];

const store = createStore({
  users: initialState
});

export default store;