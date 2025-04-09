import { useState } from "react"
import { useItems } from "./ItemsContext"
import "./App.css"

function PaginaPrincipal() {
  const [nombre, setNombre] = useState("")
  const [consulta, setConsulta] = useState("")
  const [reclamo, setReclamo] = useState("")
  const { items, agregarItem } = useItems()

  let index = 0;

  const crearConsulta = () => {
    if (nombre.trim() === "" || consulta.trim() === "") return

    const nuevaClienteConsulta = {
      tipo: "CONSULTA",
      texto: consulta,
      nombre: nombre,
      id: index += 1,
    }

    agregarItem(nuevaClienteConsulta)
    setConsulta("")
  }

  const crearReclamo = () => {
    if (nombre.trim() === "" || reclamo.trim() === "") return

    const nuevoClienteReclamo = {
      tipo: "RECLAMO",
      texto: reclamo,
      nombre: nombre,
      id: index += 1,
    }

    agregarItem(nuevoClienteReclamo)
    setReclamo("")
  }

  return (
    <div className="contenedor">
      <div className="encabezado">
        <div className="etiqueta-clientes">CLIENTES</div>
        <div className="contenedor-nombre">
          <input
            type="text"
            placeholder="NOMBRE"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="entrada-nombre"
          />
        </div>
      </div>

      <div className="contenedor-lista">
        {items.map((item, indice) => (
          <div key={item.id} className="item">
            {item.tipo} {indice + 1}: {item.nombre} - {item.texto}
          </div>
        ))}
      </div>

      <div className="contenedor-acciones">
        <div className="accion">
          <button onClick={crearConsulta} className="boton-crear">
            CREAR CONSULTA
          </button>
          <input
            type="text"
            placeholder="ESCRIBA SU CONSULTA"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            className="entrada-texto"
          />
        </div>

        <div className="accion">
          <button onClick={crearReclamo} className="boton-crear">
            CREAR RECLAMO
          </button>
          <input
            type="text"
            placeholder="ESCRIBA SU RECLAMO"
            value={reclamo}
            onChange={(e) => setReclamo(e.target.value)}
            className="entrada-texto"
          />
        </div>
      </div>
    </div>
  )
}

export default PaginaPrincipal
