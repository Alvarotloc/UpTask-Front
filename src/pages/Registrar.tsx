import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Alerta } from "../components";
import clienteAxios from "../config/clienteAxios";
import { IAlerta } from "../interfaces";
export const Registrar: FC = (): JSX.Element => {

  const [nombre, setNombre] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [alerta, setAlerta] = useState<IAlerta>({} as IAlerta)

  useEffect(() => {
    if(alerta.msg){
    setTimeout(() => {
        setAlerta({} as IAlerta)
      }, 3000);
    }
  },[alerta])

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if([nombre,email,password,confirmPassword].includes('')){
      return setAlerta({
        msg : 'Todos los campos son obligatorios',
        error : true
      })
    }

    if(confirmPassword !== password){
      return setAlerta({
        msg : 'Deben coincidir las contraseñas',
        error:true
      })
    }
    if(password.length < 6){
      return setAlerta({
        msg : 'La contraseña ha de tener como mínimo 6 caraceteres',
        error:true
      })
    }
    try {
      const {data} = await clienteAxios.post('/usuarios',{nombre,email,password})
      setAlerta({
        error:false,
        msg:data.msg
      })
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setNombre('')
    } catch (error:any) {
      setAlerta({
        error:true,
        msg:error.response.data.msg
      })
    }
  }
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl sm:text-6xl capitalize">
        Crea tu cuenta y administra{" "}
        <span className="text-slate-700">tus proyectos</span>
      </h1>
      {alerta.msg && <Alerta error={alerta.error} msg={alerta.msg}/>}
      <form className="mt-10 mb-5 shadow bg-white rounded-md p-10" onSubmit={handleSubmit}>
        <fieldset>
          <div className="mb-5 space-y-2">
            <label
              htmlFor="nombre"
              className="uppercase text-gray-600 font-bold block"
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3 py-1 border rounded-md bg-gray-50"
            />
          </div>
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
              className="w-full px-3 py-1 border rounded-md bg-gray-50"
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña de registro"
              className="w-full px-3 py-1 border rounded-md bg-gray-50"
            />
          </div>
          <div className="my-5 space-y-2">
            <label
              htmlFor="confirmar"
              className="uppercase text-gray-600 font-bold block"
            >
              Confirmar Contraseña
            </label>
            <input
              type="password"
              name="confirmar"
              id="confirmar"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirma tu contraseña"
              className="w-full px-3 py-1 border rounded-md bg-gray-50"
            />
          </div>
          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-sky-700 w-full rounded-md py-3 text-white font-bold uppercase hover:bg-sky-800 transition-colors cursor-pointer"
          />
        </fieldset>
      </form>
      <nav className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between">
        <Link
          to="/"
          className="text-sm lg:text-xs hover:underline text-center text-slate-500"
        >
          ¿Ya tienes cuenta? Inicia Sesión
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
