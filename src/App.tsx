import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import { AuthLayout, RutaProtegida } from "./layouts";
import {
  Login,
  Registrar,
  OlvidePassword,
  NuevoPassword,
  ConfirmarCuenta,
  Proyectos,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          </Route>
          <Route path="/proyectos" element={<RutaProtegida />}>
            <Route index element={<Proyectos />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
