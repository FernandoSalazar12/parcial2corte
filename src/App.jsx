import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import PaginaPrincipal from "./PaginaPrincipal"
import CentroAtencion from "./CentroAtencion"
import { ItemsProvider } from "./ItemsContext"

function App() {
  return (
    <ItemsProvider>
      <BrowserRouter>
        <div className="navegacion">
          <Link to="/" className="enlace-nav">
            Inicio
          </Link>
          <Link to="/centro-atencion" className="enlace-nav">
            Centro de Atención
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/centro-atencion" element={<CentroAtencion />} />
        </Routes>
      </BrowserRouter>
    </ItemsProvider>
  )
}

export default App
