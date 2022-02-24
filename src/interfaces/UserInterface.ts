export interface UserInterface {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserIdInterface extends UserInterface {
  id: number;
}
