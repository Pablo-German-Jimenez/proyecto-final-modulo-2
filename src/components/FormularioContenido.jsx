import { useState } from "react";
import Administrador from "./Administrador";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";

const FormularioContenido = ({ onClose, agregarContenido }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  const tipo = watch("tipo")

  const anio_Actual = new Date().getFullYear();

  const postValidaciones = (data) => {
    console.log(data);
    data.id = crypto.randomUUID();
    agregarContenido(data);
    reset();
  }

  return (
    <>
      <Modal
        show={true}
        onHide={onClose}
        keyboard={false}
        size="lg"
        className="bgformContenido"
      >
        <Modal.Header className="d-flex justify-content-center form-dark">
          <Modal.Title>AGREGAR NUEVO CONTENIDO</Modal.Title>
        </Modal.Header>
        <Modal.Body className="form-dark">
          <Form className="form-dark" onSubmit={handleSubmit(postValidaciones)}>
            <Row>
              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control type="text" placeholder="Ej: Matrix" {...register("titulo", {
                    required: "el titulo de la pelicula/serie es un dato obligatorio",
                    minLength: {
                      value: 4,
                      message: "el titulo debe contener minimo 4 caracteres"
                    },
                    maxLength: {
                      value: 70,
                      message: "el titulo debe contener maximo 60 caracteres"
                    }
                  })} />
                  <Form.Text className="text-danger">
                    {errors.titulo?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    {...register("tipo", {
                      required: "Debe seleccionar un tipo"
                    })}
                  >
                    <option value="">Seleccione un tipo</option>
                    <option value="pelicula">Pelicula</option>
                    <option value="serie">Serie</option>
                  </Form.Select>
                  <Form.Text className="text-danger">
                    {errors.tipo?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Portada (URL)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: http://matrixrecargado.jpg.com/"
                    {...register("portada", {
                      required: "la portada de la pelicula/serie es obligatoria",
                      pattern: {
                        value: /^(https?:\/\/[^\s?#]+?\.(?:png|jpe?g|gif|webp|svg)(?:\?[^\s#]*)?(?:#.*)?)$/i,
                        message: "Debe ser una URL valida de imagen (jpg,png,webp,svg)"
                      }
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.portada?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    {tipo === "serie" ? "Temporada" : "Duracion"}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder={
                      tipo === "serie" ? "Ej: 5 temporadas" : "Ej: 120 minutos"
                    }
                    {...register(tipo === "serie" ? "temporada" : "duracion", {
                      required: tipo === "serie" ? "las temporadas son un dato obligatorio" : "la duracion es un dato obligatorio",
                      min: { value: 1, message: "debe ser mayor que 0" }
                    })
                    }
                  />
                  <Form.Text className="text-danger">
                    {tipo === "serie" ? errors.temporada?.message : errors.duracion?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Select
                    {...register("categoria", {
                      required: "Debe seleccionar una categoria"
                    })}
                  >
                    <option value="">Seleccione una categoria</option>
                    <option value="accion">Acción</option>
                    <option value="fantasia">Fantasía</option>
                    <option value="drama">Drama</option>
                    <option value="terror">Terror</option>
                    <option value="comedia">Comedia</option>
                    <option value="romance">Romance</option>
                    <option value="infantil">Infantil</option>
                  </Form.Select>
                  <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Año</Form.Label>
                  <Form.Control type="number" placeholder="Ej: 2002"
                    {...register("anio",
                      {
                        required: "el año es un dato obligatorio",
                        min: {
                          value: 1888,
                          message: "el año ingresado debe ser mayor o igual a 1888"
                        },
                        max: anio_Actual,
                        message: "el año ingresado no puede ser mayor al actual"
                      })}
                  />
                  <Form.Text className="text-danger">
                    {errors.anio?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Clasificacion</Form.Label>
                  <Form.Select
                    {...register("clasificacion", {
                      required: "la clasificacion es un dato obligatorio"
                    })}
                  >
                    <option value="">Seleccione una clasificacion</option>
                    <option value="+6">+6</option>
                    <option value="+12">+12</option>
                    <option value="+18">+18</option>
                  </Form.Select>
                </Form.Group>
                <Form.Text className="text-danger">{errors.clasificacion?.message}</Form.Text>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="un experto en computadoras descubre que su mundo es una simulacion total creada con maliciosas intenciones por parte de la ciberinteligencia."
                    style={{ height: "100px", resize: "none" }}
                    {...register("descripcion", {
                      required: "la descripcion es un dato obligatorio",
                      minLength: {
                        value: 20,
                        message: "el descripcion debe contener minimo 20 caracteres"
                      },
                      maxLength: {
                        value: 200,
                        message: "la descripcion debe contener maximo 200 caracteres"
                      }
                    })}
                  />
                  <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Agregar
                </Button>
              </Col>
            </Row>
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
