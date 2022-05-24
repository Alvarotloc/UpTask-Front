import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"

const App = ():JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App