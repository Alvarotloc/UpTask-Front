import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Alerta } from "../components";
import clienteAxios from "../config/clienteAxios";
import { IAlerta } from "../interfaces";

export const OlvidePassword: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [alerta, setAlerta] = useState<IAlerta>({} as IAlerta);

  useEffect(() => {
    if (alerta.msg) {
      setTimeout(() => {
        setAlerta({} as IAlerta);
      }, 3000);
    }
  }, [alerta]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === "") {
      return setAlerta({
        error: true,
        msg: "El Email no Debe ir Vacio",
      });
    }
    try {
      const { data } = await clienteAxios.post('/usuarios/recuperar-password',
        { email }
      );
      setAlerta({
        error: false,
        msg: data.msg,
      });
      setEmail("");
    } catch (error: any) {
      setAlerta({
        error: true,
        msg: error.response.data.msg,
      });
    }
  };
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl sm:text-6xl  capitalize">
        Recupera tu acceso y administra{" "}
        <span className="text-slate-700">tus proyectos</span>
      </h1>
      {alerta.msg && <Alerta error={alerta.error} msg={alerta.msg} />}
      <form
        className="mt-10 mb-5 shadow bg-white rounded-md p-10"
        onSubmit={handleSubmit}
      >
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
              placeholder="Email de registro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>
          <input
            type="submit"
            value="Enviar Instrucciones"
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
          to="/"
          className="text-sm lg:text-xs hover:underline text-center text-slate-500"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  );
};
