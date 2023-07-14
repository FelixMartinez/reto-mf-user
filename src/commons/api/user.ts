import { standardReq, IBaseAPIReq } from "../../shared/utils/utils";
import { IUser } from "../model/user";

export const getUser = async (id: number) => {
  const userInfo = await standardReq({
    path: 'user/'+id,
    method: 'GET',
  });
  return handleUserReturn(userInfo);
};

export const getUsers = async () => {
  const userInfo = await standardReq({
    path: 'users',
    method: 'GET',
  });
  return handleUserReturn(userInfo);
};

const handleUserReturn = (users) => {
  const { errors }: IUsersInfo = users;
  return {
    success: !errors ? true : false,
    users: !errors ? users : undefined,
    errors,
  };
};

interface IUsersInfo extends IBaseAPIReq {
  users?: IUser[];
}
