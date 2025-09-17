import { useState } from "react";
import Administrador from "./Administrador";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const FormularioContenido = ({ onClose }) => {
  const [tipo, setTipo] = useState("");
  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="bgformContenido"
      >
        <Modal.Header className="d-flex justify-content-center form-dark">
          <Modal.Title>AGREGAR NUEVO CONTENIDO</Modal.Title>
        </Modal.Header>
        <Modal.Body className="form-dark">
          <Form className="form-dark">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Ej: Matrix" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tipo</Form.Label>
              <Form.Select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="">Seleccione un tipo</option>
                <option value="pelicula">Pelicula</option>
                <option value="serie">Serie</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Portada (URL)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: http://matrixrecargado.jpg.com/"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                {tipo === "serie" ? "Temporada" : "Duracion"}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={
                  tipo === "serie" ? "Ej: 5 temporadas" : "Ej: 120 minutos"
                }
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Categoria</Form.Label>
              <Form.Select>
                <option value="">Seleccione una categoria</option>
                <option value="accion">Acción</option>
                <option value="fantasia">Fantasía</option>
                <option value="drama">Drama</option>
                <option value="terror">Terror</option>
                <option value="comedia">Comedia</option>
                <option value="romance">Romance</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="un experto en computadoras descubre que su mundo es una simulacion total creada con maliciosas intenciones por parte de la ciberinteligencia."
                style={{ height: "100px", resize: "none" }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Agregar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormularioContenido;
