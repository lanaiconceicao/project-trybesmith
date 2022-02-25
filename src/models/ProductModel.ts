import { ProductInterface } from '../interfaces/ProductInterface';
import connection from './connection';

export const add = async (product: ProductInterface) => {
  const [result] = await connection
    .query(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [product.name, product.amount],
    );
  
  const getId = JSON.parse(JSON.stringify(result));

  // ? não vai passar 'undefined' pra frente
  return {
    id: getId[0]?.id,
    name: product.name,
    amount: product.amount,
  };
};

// retirar:
export const teste = 0;