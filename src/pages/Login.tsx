import { Link } from "react-router-dom";

const Login = (): JSX.Element => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Inicia sesión y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow rounded-lg">
        <fieldset className="border-0 p-10">
          <div className="mb-5 ">
            <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold mb-3">Email</label>
            <input type="email" name="email" id="email" placeholder="Email de Registro" className="w-full p-3 border rounded-md bg-gray-50"/>
          </div>
          <div className="my-5 ">
            <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold mb-3">Password</label>
            <input type="password" name="password" id="password" placeholder="Password de Registro" className="w-full p-3 border rounded-md bg-gray-50"/>
          </div>
          <input type="submit" value="Iniciar Sesión" className="bg-sky-700 w-full mt-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"/>
        </fieldset>
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link to='registrar' className="block text-center text-slate-500 uppercase text-sm font-semibold hover:text-slate-600 transition-colors cursor-pointer">¿No tienes una cuenta? Regístrate</Link>
        <Link to='olvide-password' className="block text-center text-slate-500 uppercase text-sm font-semibold hover:text-slate-600 transition-colors cursor-pointer">Olvidé Mi Password</Link>
      </nav>
    </>
  );
};

export default Login;
