import { FC } from "react";
import { Link } from "react-router-dom";
export const Registrar: FC = (): JSX.Element => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl sm:text-6xl capitalize">
        Crea tu cuenta y administra{" "}
        <span className="text-slate-700">tus proyectos</span>
      </h1>
      <form className="mt-10 mb-5 shadow bg-white rounded-md p-10">
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
              placeholder="Email de registro"
              className="w-full px-3 py-1 border rounded-md bg-gray-50"
            />
          </div>
          <div className="my-5 space-y-2">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 font-bold block"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password de registro"
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
