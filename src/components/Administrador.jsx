import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import ItemTablaContenido from "./ItemTablaContenido";
import FormularioContenido from "./FormularioContenido";

import { Link } from "react-router";

const Administrador = ({ catalogo, agregarContenido, eliminarContenido, destacarFila, filaDestacada }) => {

import { useNavigate } from "react-router";
import { Link } from "react-router";

const Administrador = ({ catalogo, agregarContenido, eliminarContenido, modificarContenido, filaDestacada, destacarFila }) => {

  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

  return (
    <>
      <section className="container">
        <div className="d-flex align-items-center">
          <h2 className="flex-grow-1 text-center mb-0">ADMINISTRAR CATALOGO</h2>
          <Link className="btn btn-primary mt-2 me-2 d-none d-md-block" to={"/administrador/crear"}>
            Nuevo
            <i class="bi bi-plus"></i>
          </Link>
        </div>
        <div className="row">
          <div className="container-fluid col-12">
            <Table responsive bordered className="mt-3">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Portada</th>
                  <th>Categoria</th>
                  <th>Año</th>
                  <th>Clasificacion</th>
                  <th>Descripcion</th>
                  <th>Publicado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {catalogo.map((itemContenido, indice) => (
                  <ItemTablaContenido
                    key={itemContenido.id}
                    item={itemContenido}
                    abrirModal={abrirModal}
                    agregarContenido={agregarContenido}
                    eliminarContenido={eliminarContenido}
                    filaDestacada={filaDestacada}
                    destacarFila={destacarFila}
                    fila={indice + 1}
                  ></ItemTablaContenido>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </section >
      {showModal && <FormularioContenido onClose={cerrarModal} agregarContenido={agregarContenido} />
      }
    </>
  );
};

export default Administrador;
