import { useState, useEffect, createContext } from "react";
import Cookies from 'universal-cookie'

import { IAuthProvider, IAuthUsuario, IChidlren } from "../interfaces";
import clienteAxios from '../config/clienteAxios';
import { useNavigate } from "react-router";

const AuthContext = createContext({} as IAuthProvider);

const cookies = new Cookies()

const AuthProvider = ({ children }: IChidlren) => {
  const [auth, setAuth] = useState<IAuthUsuario>({} as IAuthUsuario);
  const [cargando, setCargando] = useState<boolean>(true);

  const navigate = useNavigate()

  useEffect(() => {
      const autenticarUsuario = async () => {
        const token = cookies.get('token')
        if(!token){
            setCargando(false)
            return
        }
        const config = {
            headers : {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const {data}:{data:IAuthUsuario} = await clienteAxios('/usuarios/perfil',config)
            data.token = token
            setAuth(data)
            navigate('/proyectos')
        } catch (error) {
            console.log(error)
            setAuth({} as IAuthUsuario)
        }finally{
            setCargando(false)
        }
    }
    autenticarUsuario()
  },[])

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
