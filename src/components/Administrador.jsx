import React from "react";
import { Button, Table } from "react-bootstrap";
import ItemTablaContenido from "./ItemTablaContenido";

const Administrador = () => {
  return (
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
              <ItemTablaContenido></ItemTablaContenido>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Administrador;
