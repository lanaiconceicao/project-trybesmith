import JwtInterface from '../interfaces/JwtInterfaces';
import LoginInterface from '../interfaces/LoginInterface';
import LoginModel from '../models/LoginModel';
import { signToken } from '../utils/jwt';

const LoginService = async (login: LoginInterface) => {
  const getUser = await LoginModel(login);

  // ===================
  // Feito com a ajuda do instrutor Raphael Caputo
  if (getUser.id === undefined) return false;
  // ===================
  const payload: JwtInterface = {
    id: getUser.id,
    username: getUser.username,
  };

  const tokenCreate = signToken(payload);
  return tokenCreate;
};

export default LoginService;
