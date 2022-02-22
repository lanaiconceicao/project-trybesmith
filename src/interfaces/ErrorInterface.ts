import { Root } from 'joi';

// import Joi from 'joi'
// ctrl + .
// pesquisar: isError
// Root está dentro de ValidationError

interface ErrorInterface extends Root {
  code: string,
  status: string,
}

export default ErrorInterface;