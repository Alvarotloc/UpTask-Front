import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";
import type { IAlerta, RespuestaApi } from "../interfaces";
const ConfirmarCuenta = (): JSX.Element => {
  const alertaBase: IAlerta = { mensaje: "", error: false };
  const [alerta, setAlerta] = useState<IAlerta>(alertaBase);
  const [cuentaConfirmada, setCuentaConfirmada] = useState<boolean>(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `${
          import.meta.env.VITE_BACKEND_URL
        }/api/usuarios/confirmar/${id}`;
        const { data }: { data: RespuestaApi } = await axios(url);
        setAlerta({
          mensaje: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error: any) {
        setAlerta({
          mensaje: error.response.data.msg,
          error: true,
        });
      }
    };
    confirmarCuenta();
  }, []);

  const { mensaje } = alerta;
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirma tu cuenta y comienza a crear tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {mensaje && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link
            to="/"
            className="block text-center text-slate-500 uppercase text-sm font-semibold hover:text-slate-600 transition-colors cursor-pointer"
          >
            Inicia Sesión
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
