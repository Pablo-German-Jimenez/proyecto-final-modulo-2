import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import ItemTablaContenido from "./ItemTablaContenido";
import FormularioContenido from "./FormularioContenido";

const Administrador = () => {
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

  return (
    <>
      <section className="container">
        <div className="d-flex justify-content-center">
          <h2 className="text-center mb-0">ADMINISTRAR CATALOGO</h2>
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
                  <th>Descripcion</th>
                  <th>Publicado</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                <ItemTablaContenido
                  abrirModal={abrirModal}
                ></ItemTablaContenido>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
      {showModal && <FormularioContenido onClose={cerrarModal} />}
    </>
  );
};

export default Administrador;
