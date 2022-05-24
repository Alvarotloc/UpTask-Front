import { Link } from "react-router-dom"

const OlvidePassword = ():JSX.Element => {
  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">
      Recupera tu acceso y no pierdaas tus {" "}
      <span className="text-slate-700">proyectos</span>
    </h1>
    <form className="my-10 bg-white shadow rounded-lg">
      <fieldset className="border-0 p-10">
        <div className="mb-5 ">
          <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold mb-3">Email</label>
          <input type="email" name="email" id="email" placeholder="Email de Registro" className="w-full p-3 border rounded-md bg-gray-50"/>
        </div>
        <input type="submit" value="Enviar Instrucciones" className="bg-sky-700 w-full mt-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"/>
      </fieldset>
    </form>
    <nav className="lg:flex lg:justify-between">
      <Link to='/' className="block text-center text-slate-500 uppercase text-sm font-semibold hover:text-slate-600 transition-colors cursor-pointer">¿Ya tienes una cuenta? Inicia Sesión</Link>
      <Link to='registrar' className="block text-center text-slate-500 uppercase text-sm font-semibold hover:text-slate-600 transition-colors cursor-pointer">¿No tienes una cuenta? Regístrate</Link>
    </nav>
  </>
  )
}

export default OlvidePassword