import { use, useState } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import FormularioContenido from "./FormularioContenido";

const ItemTablaContenido = ({ abrirModal }) => {
  const [Contenido, setContenido] = useState(true);

  const cambiarEstadoContenido = () => {
    setContenido(!Contenido);
  };

  return (
    <>
      <tr>
        <td>123</td>
        <td>Harry Potter</td>
        <td>Pelicula</td>
        <td>
          <img src="" alt="portada pelicula" />
        </td>
        <td>Fantasia</td>
        <td className="text-truncate" style={{ maxWidth: 200 }}>
          Durante su primer año en la escuela de magia y hechiceria de Hogwarts,
          Harry Potter descrubre que un malevolo y poderoso mago llamado
          Voldemort esta en busca de una piedra filosofal que alarga la vida a
          quien la posee.
        </td>
        <td>
          <div className="d-flex justify-content-center">
            <button
              className={`btn ${Contenido ? "btn-danger" : "btn-success"}`}
              onClick={cambiarEstadoContenido}
            >
              <i
                className={`bi ${
                  Contenido ? "bi-x-circle-fill" : "bi-patch-check-fill"
                } `}
              ></i>
            </button>
          </div>
        </td>
        <td className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2">
          {/* botones para dispositivos medium en adelante */}
          <div className="d-none d-md-flex gap-2">
            <button className="btn btn-primary" onClick={abrirModal}>
              <i class="bi bi-plus"></i>
            </button>
            <button className="btn btn-danger">
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
                  <i class="bi bi-plus me-2"></i>Agregar
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
