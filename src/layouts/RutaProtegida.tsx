import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';
export const RutaProtegida:FC = ():JSX.Element => {
    const {auth, cargando} = useAuth()

    if(cargando) return (<>cargando</>)

  return (
    <>
        {Object.keys(auth).length > 0 ? <Outlet /> : <Navigate to='/'/>}
    </>
  )
}
