import UserInterface from '../interfaces/UserInterface';
import * as UserModel from '../models/UserModel';

export const addService = async (user: UserInterface) => UserModel.add(user);

// retirar:
export const teste = 0;