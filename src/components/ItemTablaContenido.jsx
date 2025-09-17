import { Dropdown, ButtonGroup, Button } from "react-bootstrap";

const ItemTablaContenido = () => {
  return (
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
        Harry Potter descrubre que un malevolo y poderoso mago llamado Voldemort
        esta en busca de una piedra filosofal que alarga la vida a quien la
        posee.
      </td>
      <td>
        <button className="btn btn-success">
          <i className="bi bi-patch-check-fill"></i>
        </button>
      </td>
      <td className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2">
        {/* botones para dispositivos medium en adelante */}
        <div className="d-none d-md-flex gap-2">
          <button className="btn btn-danger">
            <i class="bi bi-trash-fill"></i>
          </button>
          <button className="btn btn-warning">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button className="btn btn-warning">
            <i class="bi bi-star-fill"></i>
          </button>
        </div>
        {/* menu desplegable para dispositivos mobile*/}
        <div className="d-flex d-md-none">
          <Dropdown as={ButtonGroup}>
            <Button variant="secondary">
              <i class="bi bi-gear-fill"></i>
            </Button>
            <Dropdown.Toggle
              split
              variant="secondary"
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
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
  );
};

export default ItemTablaContenido;
