import { OkPacket } from 'mysql2';
import connection from './connection';
import UserInterface from '../interfaces/UserInterface';

export const add = async (user: UserInterface) => {
  const [result] = await connection
    .query(
      'INSERT INTO users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [user.username, user.classe, user.level, user.password],
    );

  // Source: https://livecodestream.dev/post/your-guide-to-building-a-nodejs-typescript-rest-api-with-mysql/
  const { insertId } = <OkPacket> result;
    
  return {
    id: insertId,
    username: user.username,
    classe: user.classe,
    level: user.level,
    password: user.password,
  };
};

// retirar:
export const teste = 0;
