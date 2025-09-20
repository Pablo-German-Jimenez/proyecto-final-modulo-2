import { use, useState } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import FormularioContenido from "./FormularioContenido";
import { useParams } from "react-router";


const ItemTablaContenido = ({ abrirModal, catalogo, eliminarContenido, fila, modificarContenido }) => {
  const [Contenido, setContenido] = useState(true);

  const cambiarEstadoContenido = () => {
    setContenido(!Contenido);
  };

  return (
    <>
      <tr>
        <td className="align-middle">{fila}</td>
        <td className="align-middle">{catalogo.titulo}</td>
        <td className="align-middle">{catalogo.tipo}</td>
        <td>
          <img src={catalogo.portada} className="imgtableAdmin" alt="portada pelicula" />
        </td>
        <td className="align-middle">{catalogo.categoria}</td>
        <td className="align-middle">{catalogo.anio}</td>
        <td className="text-center align-middle">{catalogo.clasificacion}</td>
        <td className="text-truncate align-middle" style={{ maxWidth: 200 }}>
          {catalogo.descripcion}
        </td>
        <td className="align-middle">
          <div className="d-flex justify-content-center">
            <button
              className={`btn ${Contenido ? "btn-danger" : "btn-success"}`}
              onClick={cambiarEstadoContenido}
            >
              <i
                className={`bi ${Contenido ? "bi-x-circle-fill" : "bi-patch-check-fill"
                  } `}
              ></i>
            </button>
          </div>
        </td>
        <td className="align-middle">
          {/* botones para dispositivos medium en adelante */}
          <div className="d-none d-md-flex gap-2">
            <button className="btn btn-danger" onClick={() => eliminarContenido(catalogo.id)}>
              <i className="bi bi-trash-fill"></i>
            </button>
            <button className="btn btn-warning">
              <i className="bi bi-pencil-square"></i>
            </button>
            <button className="btn btn-warning">
              <i className="bi bi-star-fill"></i>
            </button>
          </div>
          {/* menu desplegable para dispositivos mobile*/}
          <div className="d-flex d-md-none">
            <Dropdown as={ButtonGroup} drop="start">
              <Button variant="secondary">
                <i className="bi bi-gear-fill"></i>
              </Button>
              <Dropdown.Toggle
                split
                variant="secondary"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item as="button">
                  <i className="bi bi-plus me-2"></i>Agregar
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <i className="bi bi-trash-fill me-2"></i>Eliminar
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <i className="bi bi-pencil-square me-2"></i>Editar
                </Dropdown.Item>
                <Dropdown.Item as="button">
                  <i className="bi bi-star-fill me-2"></i>Destacar
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemTablaContenido;
