import { FC } from "react";
export const NuevoPassword: FC = (): JSX.Element => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl sm:text-6xl  capitalize">
        Reestablece tu contraseña y administra{" "}
        <span className="text-slate-700">tus proyectos</span>
      </h1>
      <form className="mt-10 mb-5 shadow bg-white rounded-md p-10">
        <fieldset>
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
              placeholder="Escribe tu nueva contraseña"
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
            value="Reestablecer Contraseña"
            className="bg-sky-700 w-full rounded-md py-3 text-white font-bold uppercase hover:bg-sky-800 transition-colors cursor-pointer"
          />
        </fieldset>
      </form>
    </>
  );
};
