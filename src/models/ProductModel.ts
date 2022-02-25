import { OkPacket } from 'mysql2';
import { ProductInterface } from '../interfaces/ProductInterface';
import connection from './connection';

export const add = async (product: ProductInterface) => {
  const [result] = await connection
    .query(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [product.name, product.amount],
    );
  
  const { insertId } = <OkPacket> result;

  // ? não vai passar 'undefined' pra frente
  return {
    id: insertId,
    name: product.name,
    amount: product.amount,
  };
};

export const getAllProducts = async () => {
  const [result] = await connection
    .query(
      'SELECT id, name, amount, orderId FROM Trybesmith.Products;',
    );
  return result;
};