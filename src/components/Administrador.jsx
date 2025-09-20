import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import ItemTablaContenido from "./ItemTablaContenido";
import FormularioContenido from "./FormularioContenido";

const Administrador = ({ catalogo, agregarContenido }) => {
  const [showModal, setShowModal] = useState(false);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

  return (
    <>
      <section className="container">
        <div className="d-flex align-items-center">
          <h2 className="flex-grow-1 text-center mb-0">ADMINISTRAR CATALOGO</h2>
          <button className="btn btn-primary mt-2 me-2 d-none d-md-block" onClick={abrirModal}>
            Nuevo
            <i class="bi bi-plus"></i>
          </button>
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
                {catalogo.map((itemContenido) => (
                  <ItemTablaContenido
                    key={itemContenido.id}
                    catalogo={itemContenido}
                    abrirModal={abrirModal}
                    agregarContenido={agregarContenido}
                  ></ItemTablaContenido>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
      {showModal && <FormularioContenido onClose={cerrarModal} agregarContenido={agregarContenido} />}
    </>
  );
};

export default Administrador;
