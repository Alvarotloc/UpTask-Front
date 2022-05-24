import { Link } from "react-router-dom"
import { useState } from 'react';
import type { IAlerta } from "../interfaces";
import Alerta from "../components/Alerta";
import axios from "axios";

type RespuestaApi = {
  msg : string
}

const Registrar = ():JSX.Element => {
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repetirPassword, setRepetirPassword] = useState<string>('');
  const alertaBase:IAlerta = {mensaje : '', error : false}
  const [alerta, setAlerta] = useState<IAlerta>(alertaBase);

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlerta(alertaBase)
    if([nombre,email,password,repetirPassword].includes('')){
      setAlerta({
        mensaje : 'Todos los campos son obligatorios',
        error   : true
      });
      return;
    };
    if(password.length < 6){
      setAlerta({
        mensaje : 'El password debe tener al menos 6 caracteres',
        error   : true
      })
      return;
    }
    if(password !== repetirPassword){
      setAlerta({
        mensaje : 'Las passwords deben ser iguales',
        error   : true
      });
      return;
    };

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios`;
      const {data}:{data : RespuestaApi} = await axios.post(url,{
        nombre,
        password,
        email
      });
      setAlerta({
        mensaje : data.msg,
        error   : false,
      });
      setNombre('');
      setEmail('');
      setPassword('');
      setRepetirPassword('');
    } catch (error:any) {
      setAlerta({
        mensaje : error.response.data.msg,
        error : true
      })
    }
  };

  const {mensaje} = alerta;

  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">
      Crea tu cuenta y administra tus{" "}
      <span className="text-slate-700">proyectos</span>
    </h1>
    <form className="my-10 bg-white shadow rounded-lg  p-10" onSubmit={handleSubmit}>
      {mensaje && <Alerta alerta={alerta}/>}
      <fieldset className="border-0">
        <div className="mb-5 ">
          <label htmlFor="nombre" className="uppercase text-gray-600 block text-xl font-bold mb-3">Nombre</label>
          <input type="text" name="nombre" id="nombre" value={nombre} onChange={event => setNombre(event.target.value)} placeholder="Tu Nombre" className="w-full p-3 border rounded-md bg-gray-50" autoFocus/>
        </div>
        <div className="mb-5 ">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold mb-3">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Email de Registro" className="w-full p-3 border rounded-md bg-gray-50"/>
        </div>
        <div className="my-5 ">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold mb-3">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Password de Registro" className="w-full p-3 border rounded-md bg-gray-50"/>
        </div>
        <div className="my-5 ">
          <label htmlFor="confirmarpassword" className="uppercase text-gray-600 block text-xl font-bold mb-3">Confirmar Password</label>
          <input type="password" name="confirmarpassword" id="confirmarpassword" value={repetirPassword} onChange={event => setRepetirPassword(event.target.value)} placeholder="Confirmar Password" className="w-full p-3 border rounded-md bg-gray-50"/>
        </div>
        <input type="submit" value="Crear Cuenta" className="bg-sky-700 w-full mt-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"/>
      </fieldset>
    </form>
    <nav className="lg:flex lg:justify-between">
      <Link to='/' className="block text-center text-slate-500 uppercase text-sm font-semibold hover:text-slate-600 transition-colors cursor-pointer">¿Ya tienes una cuenta? Inicia Sesión</Link>
    </nav>
  </>
  )
}

export default Registrar