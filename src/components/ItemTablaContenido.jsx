import { use, useState } from "react";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import FormularioContenido from "./FormularioContenido";
import { Link } from "react-router";

const ItemTablaContenido = ({ item, fila, agregarContenido, eliminarContenido, filaDestacada, destacarFila }) => {
  const [Contenido, setContenido] = useState(true);

  const cambiarEstadoContenido = () => {
    setContenido(!Contenido);
  };

  return (
    <>
      <tr className={filaDestacada === item.id ? "highlight" : ""}>
        <td className="align-middle">{fila}</td>
        <td className="align-middle">{item.titulo}</td>
        <td className="align-middle">{item.tipo}</td>
        <td>
          <img src={item.portada} className="imgTablaAdmin" alt="portada pelicula" />
        </td>
        <td className="align-middle">{item.categoria}</td>
        <td className="align-middle">{item.anio}</td>
        <td className="text-center align-middle">{item.clasificacion}</td>
        <td className="text-truncate align-middle" style={{ maxWidth: 200 }}>
          {item.descripcion}
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
            <button className="btn btn-danger" onClick={() => eliminarContenido(item.id)}>
              <i className="bi bi-trash-fill"></i>
            </button>
            <Link className="btn btn-warning" to={`/administrador/editar/${item.id}`}>
              <i className="bi bi-pencil-square"></i>
            </Link>
            <button className="btn btn-warning" onClick={() => destacarFila(item.id)}>
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
                <Link to={"/administrador/crear"}>
                  <Dropdown.Item as="button">
                    <i className="bi bi-plus me-2"></i>Agregar
                  </Dropdown.Item>
                </Link>
                <Dropdown.Item as="button" onClick={() => eliminarContenido(item.id)}>
                  <i className="bi bi-trash-fill me-2"></i>Eliminar
                </Dropdown.Item>
                <Link to={`/administrador/editar/${item.id}`}>
                  <Dropdown.Item as="button">
                    <i className="bi bi-pencil-square me-2"></i>Editar
                  </Dropdown.Item>
                </Link>
                <Dropdown.Item as="button" onClick={() => destacarFila(item.id)}>
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
