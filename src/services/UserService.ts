import JwtInterface from '../interfaces/JwtInterfaces';
import { UserInterface } from '../interfaces/UserInterface';
import * as UserModel from '../models/UserModel';
import { signToken } from '../utils/jwt';

export const addService = async (user: UserInterface) => {
  const addUser = await UserModel.add(user);
  const payload: JwtInterface = {
    id: addUser.id,
    username: addUser.username,
  };

  const tokenCreate = signToken(payload);
  return tokenCreate;
};

export default addService;