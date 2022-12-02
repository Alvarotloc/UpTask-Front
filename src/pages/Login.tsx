import { FC, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'

import { Alerta } from '../components';
import clienteAxios from '../config/clienteAxios';
import { IAlerta } from '../interfaces';
import useAuth from '../hooks/useAuth';
import { IAuthUsuario } from '../interfaces/Contexts.interface';

export const Login: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [alerta, setAlerta] = useState<IAlerta>({} as IAlerta)

  const {setAuth} = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if(alerta.msg){
    setTimeout(() => {
        setAlerta({} as IAlerta)
      }, 3000);
    }
  },[alerta])

  const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const cookies = new Cookies()
    if([email,password].includes('')){
      return setAlerta({
        error:true,
        msg:'Todos los campos son obligatorios'
      })
    }
    try {
      const {data}:{data:IAuthUsuario} = await clienteAxios.post('/usuarios/login',{email,password})
      cookies.set('token',data.token,{path : '/'})
      setAuth(data)
      navigate('/proyectos')
    } catch (error:any) {
      setAlerta({
        error:true,
        msg:error.response.data.msg
      })
    }
  }

  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl sm:text-6xl  capitalize">
        Inicia sesión y administra{" "}
        <span className="text-slate-700">tus proyectos</span>
      </h1>
      {alerta.msg && <Alerta error={alerta.error} msg={alerta.msg}/>}
      <form className="mt-10 mb-5 shadow bg-white rounded-md p-10" onSubmit={handleSubmit}>
        <fieldset>
          <div className="mb-5 space-y-2">
            <label
              htmlFor="email"
              className="uppercase text-gray-600 font-bold block"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email de registro"
              className="w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>
          <div className="my-5 space-y-2">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 font-bold block"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Contraseña de registro"
              className="w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-sky-700 w-full rounded-md py-3 text-white font-bold uppercase hover:bg-sky-800 transition-colors cursor-pointer"
          />
        </fieldset>
      </form>
      <nav className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between">
        <Link
          to="/registrar"
          className="text-sm lg:text-xs hover:underline text-center text-slate-500"
        >
          ¿No tienes cuenta? Crea una
        </Link>
        <Link
          to="/olvide-password"
          className="text-sm lg:text-xs hover:underline text-center text-slate-500"
        >
          ¿Has olvidado tu contraseña? Recupérala
        </Link>
      </nav>
    </>
  );
};
