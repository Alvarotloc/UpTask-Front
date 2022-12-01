import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Alerta } from "../components";
import { IAlerta } from "../interfaces";

export const ConfirmarCuenta: FC = (): JSX.Element => {
  const [alerta, setAlerta] = useState<IAlerta>({} as IAlerta);
  const [usuarioConfirmado, setUsuarioConfirmado] = useState<boolean>(false);

  const { id } = useParams();

  useEffect(() => {
    const confirmarToken = async () => {
      try {
        const url: string = `${
          import.meta.env.VITE_API_BASE_URL
        }/usuarios/confirmar/${id}`;
        const { data } = await axios(url);
        setUsuarioConfirmado(true)
        setAlerta({
          error: false,
          msg: data.msg,
        });
      } catch (error: any) {
        setAlerta({
          error: true,
          msg: error.response.data.msg,
        });
      }
    };
    confirmarToken();
  }, []);

  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl sm:text-6xl  capitalize">
        Confirma tu cuenta y administra{" "}
        <span className="text-slate-700">tus proyectos</span>
      </h1>
      <div className="w-full bg-white shadow-md rounded-md py-10 my-10 px-5 flex flex-col items-center">
        {alerta.msg && <Alerta error={alerta.error} msg={alerta.msg} />}
        {usuarioConfirmado && (
          <Link
            to="/"
            className="text-lg font-bold hover:underline text-center text-slate-500"
          >
            Inicia Sesión
          </Link>
         )}
      </div>
    </>
  );
};
