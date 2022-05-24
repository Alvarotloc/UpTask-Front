import type { IAlerta } from "../interfaces"

const Alerta = ({alerta}:{alerta : IAlerta}):JSX.Element => {
  return (
    <div className={`${alerta.error ? 'bg-red-600' : 'bg-sky-600'} bg-gradient-to-br text-center p-3 rounded uppercase text-white font-bold text-sm mb-5`}>{alerta.mensaje}</div>
  )
}

export default Alerta