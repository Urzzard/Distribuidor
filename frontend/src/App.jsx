import {BrowserRouter, Routes, Route, Navigate, useLocation} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Login } from "./pages/Login"
import { ProductosAdmin } from "./pages/ProductosAdmin"
import { PrivateRoute } from "./PrivateRoute"
import { About } from "./pages/About"
import { Inventario } from "./pages/Inventario"
import { Lotes } from "./pages/Lotes"
import { Movimientos } from "./pages/Movimientos"

function App() {

  return(
    <BrowserRouter>
      <Content/>
    </BrowserRouter>
  )
  
}

export default App

function Content(){
  const location = useLocation()
  const showNav = ["/", "/login", "/productos", "/nosotros", "/inventario", "/lotes", "/movimientos"].includes(location.pathname)

  return(
    <>
      <Toaster/>
      {showNav && <Navbar/>}
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/nosotros" element={<About/>} />
          <Route path="/productos" element={
              <PrivateRoute>
                <ProductosAdmin />
              </PrivateRoute>
            } 
          />
          <Route path="/inventario" element={
              <PrivateRoute>
                <Inventario />
              </PrivateRoute>
            } 
          />
          <Route path="/lotes" element={
              <PrivateRoute>
                <Lotes />
              </PrivateRoute>
            } 
          />
          <Route path="/movimientos" element={
              <PrivateRoute>
                <Movimientos />
              </PrivateRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}
