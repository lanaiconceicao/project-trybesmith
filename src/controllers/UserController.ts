// import rescue from 'express-rescue';
// import { Request, Response } from 'express';
// import validateSchema from './joi/validateSchema';
// import UserSchema from './joi/UserSchema';
// import UserService from '../services/UserService';

// const add = rescue(async (req: Request, res: Response) => {
//   validateSchema(UserSchema, req.body);

//   const users = await UserService(req.body);
//   res.status(201).json(users);

//   return 
// });

// export default add;