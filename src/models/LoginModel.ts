import LoginInterface from '../interfaces/LoginInterface';
import { UserIdInterface } from '../interfaces/UserInterface';
import connection from './connection';

const LoginModel = async (login: LoginInterface):Promise<UserIdInterface> => {
  const { username, password } = login;
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username=? AND password =?',
    [username, password],
  );
  const [row] = result as UserIdInterface[];
  return row;
};

export default LoginModel;