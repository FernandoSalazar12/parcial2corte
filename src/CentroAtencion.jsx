import { useItems } from "./ItemsContext"
import "./CentroAtencion.css"

function CentroAtencion() {
  const { items } = useItems()

  // cola implementada para las consultas
  const consultas = items.filter((item) => item.tipo === "CONSULTA")
  
  // Pilas para kos reclamos
  const reclamos = items
    .filter((item) => item.tipo === "RECLAMO")
    .slice()
    .reverse()

  return (
    <div className="centro-atencion">
      <h1 className="titulo-centro">Centro de Atención al Cliente</h1>

      <div className="seccion-items">
        <h2 className="subtitulo">Consultas Registradas</h2>
        {consultas.length === 0 ? (
          <p className="mensaje-vacio">No hay consultas registradas</p>
        ) : (
          <div className="lista-items">
            {consultas.map((consulta, indice) => (
              <div key={consulta.id} className="tarjeta-item">
                <div className="cabecera-item">
                  <span className="tipo-item">CONSULTA {indice + 1}</span>
                  <span className="fecha-item">{consulta.fecha}</span>
                </div>
                <div className="nombre-item">Cliente: {consulta.nombre}</div>
                <div className="texto-item">{consulta.texto}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="seccion-items">
        <h2 className="subtitulo">Reclamos Registrados</h2>
        {reclamos.length === 0 ? (
          <p className="mensaje-vacio">No hay reclamos registrados</p>
        ) : (
          <div className="lista-items">
            {reclamos.map((reclamo, indice) => (
              <div key={reclamo.id} className="tarjeta-item reclamo">
                <div className="cabecera-item">
                  <span className="tipo-item">RECLAMO {indice + 1}</span>
                  <span className="fecha-item">{reclamo.fecha}</span>
                </div>
                <div className="nombre-item">Cliente: {reclamo.nombre}</div>
                <div className="texto-item">{reclamo.texto}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CentroAtencion
