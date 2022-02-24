// import rescue from 'express-rescue';
// import { Request, Response } from 'express';
// import validateSchema from './joi/validateSchema';
// import LoginSchema from './joi/LoginSchema';
// import LoginService from '../services/LoginService';

// // Se usar rescue, achar um type para o retorno da função
// // se usar try/catch dar o erro do joi no catch

// const LoginController = rescue(async (req: Request, res: Response) => {
//   validateSchema(LoginSchema, req.body);
  
//   const token = await LoginService(req.body);

//   if (!token) {
//     return res.status(401).json({ error: 'Username or password invalid' });
//   }

//   return res.status(201).json({ token }); 
// });

// export default LoginController;

import { Request, Response } from 'express';
import validateSchema from './joi/validateSchema';
import LoginSchema from './joi/LoginSchema';
import LoginService from '../services/LoginService';

// Se usar rescue, achar um type para o retorno da função
// se usar try/catch dar o erro do joi no catch

const LoginController = async (req: Request, res: Response) => {
  validateSchema(LoginSchema, req.body);
  try {
    const token = await LoginService(req.body);

    if (!token) {
      return res.status(401).json({ error: 'Username or password invalid' });
    }

    return res.status(201).json({ token }); 
  } catch (error) {
    console.log(error);
  }
};

export default LoginController;
