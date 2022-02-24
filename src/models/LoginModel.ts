// import { OkPacket } from 'mysql2';
import LoginInterface from '../interfaces/LoginInterface';
// import { UserIdInterface } from '../interfaces/UserInterface';
import connection from './connection';

const LoginModel = async (login: LoginInterface) => {
  const [result] = await connection
    .query(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password =?;',
      [login.username, login.password],
    );
  
  // ===================
  // Feito com a ajuda do instrutor Raphael Caputo
  const getId = JSON.parse(JSON.stringify(result));

  // ? não vai passar 'undefined' pra frente
  return {
    id: getId[0]?.id,
    username: login.username,
    password: login.password,
  };
  // ===================
};

export default LoginModel;