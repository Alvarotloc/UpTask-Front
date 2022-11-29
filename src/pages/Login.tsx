import { FC } from "react";
import {Link} from 'react-router-dom'
export const Login: FC = (): JSX.Element => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl sm:text-6xl  capitalize">
        Inicia sesión y administra{" "}
        <span className="text-slate-700">tus proyectos</span>
      </h1>
      <form className="mt-10 mb-5 shadow bg-white rounded-md p-10">
        <fieldset>
          <div className="mb-10 space-y-2">
            <label htmlFor="email" className="uppercase text-gray-600 font-bold block text-xl">Email</label>
            <input type="email" name="email" id="email" placeholder="Email de registro" className="w-full p-3 border rounded-md bg-gray-50" />
          </div>
          <div className="my-10 space-y-2">
            <label htmlFor="password" className="uppercase text-gray-600 font-bold block text-xl">Password</label>
            <input type="password" name="password" id="password" placeholder="Password de registro" className="w-full p-3 border rounded-md bg-gray-50" />
          </div>
          <input type="submit" value='Iniciar Sesión' className="bg-sky-700 w-full rounded-md py-3 text-white font-bold uppercase hover:bg-sky-800 transition-colors cursor-pointer" />
        </fieldset>
      </form>
      <nav className="flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between">
        <Link to='/registrar' className="text-sm lg:text-xs hover:underline text-center text-slate-500">
          ¿No tienes cuenta? Crea una
        </Link>
        <Link to='/olvide-password' className="text-sm lg:text-xs hover:underline text-center text-slate-500">
          ¿Has olvidado tu contraseña? Recupérala
        </Link>
      </nav>
    </>
  );
};
