const NuevoPassword = ():JSX.Element => {
  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">
      Reestablece tu password y no pierdas acceso a tus{" "}
      <span className="text-slate-700">proyectos</span>
    </h1>
    <form className="my-10 bg-white shadow rounded-lg">
      <fieldset className="border-0 p-10">
        <div className="my-5 ">
          <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold mb-3">Nuevo Password</label>
          <input type="password" name="password" id="password" placeholder="Escribe Tu Nuevo Password" className="w-full p-3 border rounded-md bg-gray-50" autoFocus/>
        </div>
        <input type="submit" value="Reestablecer Password" className="bg-sky-700 w-full mt-5 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"/>
      </fieldset>
    </form>
  </>
  )
}

export default NuevoPassword