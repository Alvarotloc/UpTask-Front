export interface IChidlren {
  children: JSX.Element | JSX.Element[];
}

export interface IAuthUsuario {
  _id: string;
  nombre: string;
  email: string;
  token: string;
}

export interface IAuthProvider {
  auth: IAuthUsuario;
  setAuth: React.Dispatch<React.SetStateAction<IAuthUsuario>>;
  cargando: boolean;
}
