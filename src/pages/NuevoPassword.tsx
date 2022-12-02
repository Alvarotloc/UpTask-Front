import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Alerta } from "../components";
import { IAlerta } from "../interfaces";
export const NuevoPassword: FC = (): JSX.Element => {
  const [password, setPassword] = useState<string>("");
  const [confirmarPassword, setConfirmarPassword] = useState<string>("");
  const [alerta, setAlerta] = useState<IAlerta>({} as IAlerta);
  const [tokenValido, setTokenValido] = useState<boolean>(false);
  const [passwordModificada, setPasswordModificada] = useState<boolean>(false);

  const { token } = useParams();

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await axios(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/usuarios/recuperar-password/${token}`
        );
        setTokenValido(true);
      } catch (error: any) {
        setAlerta({
          error: true,
          msg: error.response.data.msg,
        });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([password, confirmarPassword].includes("")) {
      return setAlerta({
        error: true,
        msg: "Todos los Campos son Obligatorios",
      });
    }
    if (password !== confirmarPassword) {
      return setAlerta({
        msg: "Deben coincidir las contraseñas",
        error: true,
      });
    }
    if (password.length < 6) {
      return setAlerta({
        msg: "La contraseña ha de tener como mínimo 6 caraceteres",
        error: true,
      });
    }
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/usuarios/recuperar-password/${token}`,{password})
      setAlerta({
        error: false,
        msg: data.msg,
      });
      setPassword('')
      setConfirmarPassword('')
      setPasswordModificada(true)
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
        Reestablece tu contraseña y administra{" "}
        <span className="text-slate-700">tus proyectos</span>
      </h1>
      {alerta.msg && <Alerta error={alerta.error} msg={alerta.msg} />}
      {tokenValido && (
        <form
          className="mt-10 mb-5 shadow bg-white rounded-md p-10"
          onSubmit={handleSubmit}
        >
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmarPassword}
                onChange={(e) => setConfirmarPassword(e.target.value)}
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
      )}
      {passwordModificada && (
        <Link to="/"
        className="text-sm lg:text-xs hover:underline text-center text-slate-500">Iniciar Sesión</Link>
      )}
    </>
  );
};
